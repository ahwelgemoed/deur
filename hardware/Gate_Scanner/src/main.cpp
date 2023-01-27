#include <ESP8266WiFi.h>          
#include <DNSServer.h>
#include <ESP8266WebServer.h>
#include <AsyncMqttClient.h>
#include "WiFiManager.h"
#include <ArduinoJson.h>

int randomNumber = random(100,500);

#define JSON_CONFIG_FILE "/config.json"
#define MQTT_HOST IPAddress(192, 168, 68, 104)
#define MQTT_PORT 1881

AsyncMqttClient mqttClient;
WiFiEventHandler wifiConnectHandler;
WiFiEventHandler wifiDisconnectHandler;

String DEVICE_NAME = "@deur_"+ String(randomNumber);
String OPEN_GATE = DEVICE_NAME+"/OPEN_GATE";



void onMqttMessage(char* topic, char* payload, AsyncMqttClientMessageProperties properties, size_t len, size_t index, size_t total) {
  Serial.println("Publish received as...");
  Serial.print("topic:");
  Serial.println(topic);
  std::string payloadStr(payload, len); // converting the payload char* to std::string
  Serial.println(payloadStr.c_str());
  if (strcmp(topic, OPEN_GATE.c_str()) == 0) {
    Serial.println("I Will OPEN_GATE");
    digitalWrite(LED_BUILTIN, LOW);
    mqttClient.publish(payloadStr.c_str(), 0, false, "");
  }
}

void connectToMqtt() {
  Serial.println("Connecting to MQTT...");
  mqttClient.connect();
}

void onMqttConnect(bool sessionPresent) {
  Serial.println("Connected to MQTT.");
  Serial.print("Session present: ");
  Serial.println(sessionPresent);
  mqttClient.subscribe(OPEN_GATE.c_str(),0);
}

void onMqttDisconnect(AsyncMqttClientDisconnectReason reason) {
  Serial.println("Disconnected from MQTT.");
  if (WiFi.isConnected()) {
    Serial.println("Reconnecting to MQTT...");
    delay(5000);
    ESP.reset();
    delay(5000);
  }
}

void onWifiConnect(const WiFiEventStationModeGotIP& event) {
  Serial.println("Connected to Wi-Fi.");
  connectToMqtt();
}

void onWifiDisconnect(const WiFiEventStationModeDisconnected& event) {
  Serial.println("Disconnected from Wi-Fi.");
}



void setup() {
  Serial.begin(115200);

// Ensure Serial is ready
  while (!Serial) {
    delay(100);
  }

  pinMode(LED_BUILTIN, OUTPUT); 
  delay(1000);

  Serial.println("WIFI Connected...");
  mqttClient.setServer(MQTT_HOST, MQTT_PORT);
  mqttClient.setClientId(DEVICE_NAME.c_str());

  mqttClient.onConnect(onMqttConnect);
  mqttClient.onMessage(onMqttMessage);
  mqttClient.onDisconnect(onMqttDisconnect);
  // wifiManager.setTimeout(180);
  wifiConnectHandler = WiFi.onStationModeGotIP(onWifiConnect);
  wifiDisconnectHandler = WiFi.onStationModeDisconnected(onWifiDisconnect);


  WiFiManager wifiManager;

  // wifiManager.resetSettings();

  if(!wifiManager.autoConnect("My_Gate")) {
    Serial.println("Failed to connect and hit timeout");
    delay(3000);
    ESP.reset();
    delay(5000);
  } 
}

void loop() {
  Serial.println(DEVICE_NAME);
  Serial.println(OPEN_GATE);
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);

}

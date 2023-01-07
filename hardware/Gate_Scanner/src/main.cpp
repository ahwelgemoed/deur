#include <ESP8266WiFi.h>          
#include <DNSServer.h>
#include <ESP8266WebServer.h>
#include <AsyncMqttClient.h>
#include "WiFiManager.h"
#include <ArduinoJson.h>



#define JSON_CONFIG_FILE "/config.json"
#define MQTT_HOST IPAddress(192, 168, 68, 102)
#define MQTT_PORT 1881

AsyncMqttClient mqttClient;
WiFiEventHandler wifiConnectHandler;
WiFiEventHandler wifiDisconnectHandler;


void onMqttMessage(char* topic, char* payload, AsyncMqttClientMessageProperties properties, size_t len, size_t index, size_t total) {
  Serial.println("Publish received as...");
  Serial.println(topic);
  if (strcmp(topic, "mqtt-explorer-RealD1/OPEN_GATE") == 0) {
    Serial.println("I Will OPEN_GATE");
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
  mqttClient.subscribe("mqtt-explorer-RealD1/OPEN_GATE",0);
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
  pinMode(LED_BUILTIN, OUTPUT); 

  Serial.println("WIFI Connected...");
  mqttClient.setServer(MQTT_HOST, MQTT_PORT);
  mqttClient.setClientId("mqtt-explorer-RealD1");

  mqttClient.onConnect(onMqttConnect);
  mqttClient.onMessage(onMqttMessage);
  mqttClient.onDisconnect(onMqttDisconnect);
  // wifiManager.setTimeout(180);
  wifiConnectHandler = WiFi.onStationModeGotIP(onWifiConnect);
  wifiDisconnectHandler = WiFi.onStationModeDisconnected(onWifiDisconnect);


  WiFiManager wifiManager;

  // wifiManager.resetSettings();
 
  // Add all defined parameters

  if(!wifiManager.autoConnect("My_Gate")) {
    Serial.println("Failed to connect and hit timeout");
    delay(3000);
    ESP.reset();
    delay(5000);
  } 
}

void loop() {
  Serial.println("Reading JSON File...");
  Serial.println(F("Print config file..."));
  delay(4000);
}

#include <ESP8266WiFi.h>          
#include <DNSServer.h>
#include <ESP8266WebServer.h>
// #include <AsyncMqttClient.h>
// #include "WiFiManager.h"
// #include <ArduinoJson.h>
// #include "LittleFS.h"
// #include <FS.h>

// struct Config {
//   char gateId[9];
//   char clubId[9];
// };

// const char *conf_filename = "/gate_config.txt";  // <- SD library uses 8.3 conf_filenames
// Config config;                         // <- global configuration object


// bool shouldSaveConfig = false;
// #define JSON_CONFIG_FILE "/config.json"
// #define MQTT_HOST IPAddress(192, 168, 68, 102)
// #define MQTT_PORT 1881

// AsyncMqttClient mqttClient;
// WiFiEventHandler wifiConnectHandler;
// WiFiEventHandler wifiDisconnectHandler;


// void onMqttMessage(char* topic, char* payload, AsyncMqttClientMessageProperties properties, size_t len, size_t index, size_t total) {
//   Serial.println("Publish received as...");
//   Serial.println(topic);
//   if (strcmp(topic, "mqtt-explorer-RealD1/OPEN_GATE") == 0) {
//     Serial.println("I Will OPEN_GATE");
//   }
// }

// void connectToMqtt() {
//   Serial.println("Connecting to MQTT...");
//   mqttClient.connect();
// }

// void onMqttConnect(bool sessionPresent) {
//   Serial.println("Connected to MQTT.");
//   Serial.print("Session present: ");
//   Serial.println(sessionPresent);
//   mqttClient.subscribe("mqtt-explorer-RealD1/OPEN_GATE",0);
// }

// void onMqttDisconnect(AsyncMqttClientDisconnectReason reason) {
//   Serial.println("Disconnected from MQTT.");
//   if (WiFi.isConnected()) {
//     Serial.println("Reconnecting to MQTT...");
//     delay(5000);
//     ESP.reset();
//     delay(5000);
//   }
// }

// void onWifiConnect(const WiFiEventStationModeGotIP& event) {
//   Serial.println("Connected to Wi-Fi.");
//   connectToMqtt();
// }

// void onWifiDisconnect(const WiFiEventStationModeDisconnected& event) {
//   Serial.println("Disconnected from Wi-Fi.");
// }
// void saveConfigCallback(){
//   Serial.println("Should save config");
//   shouldSaveConfig = true;
// }

// void saveConfiguration(const char *conf_filename, const Config &config) {
//     Serial.println("saveConfiguration...");
//   // Delete existing file, otherwise the configuration is appended to the file
//   //SD.remove(conf_filename);

//   // Open file for writing
//   File file = LittleFS.open(conf_filename, "w");
//   if (!file) {
//     Serial.println("Failed to open config file for writing");
//     return;
//   }
//   // Allocate a temporary JsonDocument
//   // Don't forget to change the capacity to match your requirements.
//   // Use arduinojson.org/assistant to compute the capacity.
//   StaticJsonDocument<256> doc;
//   // Set the values in the document
//   doc["cardHolder"] = config.clubId;
//   doc["cardNumber"] = config.gateId;
//   // Serialize JSON to file
//   if (serializeJson(doc, file) == 0) {
//     Serial.println(F("Failed to write to file"));
//   }
//   // Close the file
//   file.close();
// }

// void printFile(const char *conf_filename) {
//   // Open file for reading
//   File file = LittleFS.open(conf_filename, "r");
//   if (!file) {
//     Serial.println("Failed to open data file");
//      saveConfiguration(conf_filename, config);
//     return;
//   }
//   // Extract each characters by one by one
//   while (file.available()) {
//     Serial.print((char)file.read());
//   }
//   Serial.println();
//   // Close the file
//   file.close();
// }


// void loadConfiguration(const char *conf_filename, Config &config) {
//   File file = LittleFS.open(conf_filename, "r");
//   if (!file) {
//     Serial.println("Failed to open data file");
    
//     return;
//   }
//   StaticJsonDocument<512> doc;

//   // Deserialize the JSON document
//   DeserializationError error = deserializeJson(doc, file);
//   if (error)
//     Serial.println(F("Failed to read file, using default configuration"));

//   // Copy values from the JsonDocument to the Config
  
//   strcpy(config.gateId,doc["gateId"]);
//   strcpy(config.clubId,doc["clubId"]);
//   file.close();
// }

// void setup() {
//   Serial.begin(115200);
//   // readData();
//   pinMode(LED_BUILTIN, OUTPUT); 

//   Serial.println("WIFI Connected...");
//   mqttClient.setServer(MQTT_HOST, MQTT_PORT);
//   mqttClient.setClientId("mqtt-explorer-RealD1");

//   mqttClient.onConnect(onMqttConnect);
//   mqttClient.onMessage(onMqttMessage);
//   mqttClient.onDisconnect(onMqttDisconnect);
//   // wifiManager.setTimeout(180);
//   wifiConnectHandler = WiFi.onStationModeGotIP(onWifiConnect);
//   wifiDisconnectHandler = WiFi.onStationModeDisconnected(onWifiDisconnect);

//   WiFiManagerParameter club_id_input("clud_id_num", "Enter Club Id", config.clubId, 7); 
//   WiFiManagerParameter gate_id_input("gate_id_num", "Enter Gate Id", config.gateId, 7); 

//   WiFiManager wifiManager;

//   // wifiManager.resetSettings();
//   wifiManager.setSaveConfigCallback(saveConfigCallback);
 
//   // Add all defined parameters
//   wifiManager.addParameter(&club_id_input);
//   wifiManager.addParameter(&gate_id_input);

//   if(!wifiManager.autoConnect("My_Gate")) {
//     Serial.println("Failed to connect and hit timeout");
//     delay(3000);
//     ESP.reset();
//     delay(5000);
//   } 
//   if (shouldSaveConfig){
//     saveConfiguration(conf_filename, config);
//     // saveData();
//   }

// }

// void loop() {
//   Serial.println("Reading JSON File...");
//   Serial.println(config.gateId);
//   Serial.println(config.clubId);
//   Serial.println(F("Print config file..."));
//   printFile(conf_filename);
//   delay(4000);
// }

#include <ArduinoJson.h>
#include "FS.h"
#include <LittleFS.h>

// Our configuration structure.

struct Config {
  char cardHolder[64];
  int cardNumber;
};

const char *filename_conf = "/config.txt";  // <- SD library uses 8.3 filenames
Config config;                         // <- global configuration object

// Loads the configuration from a file
void loadConfiguration(const char *filename_conf, Config &config) {

  File file = LittleFS.open(filename, "r");
  if (!file) {
    Serial.println("Failed to open data file");
    return;
  }

  // Allocate a temporary JsonDocument
  // Don't forget to change the capacity to match your requirements.
  // Use arduinojson.org/v6/assistant to compute the capacity.
  StaticJsonDocument<512> doc;

  // Deserialize the JSON document
  DeserializationError error = deserializeJson(doc, file);
  if (error)
    Serial.println(F("Failed to read file, using default configuration"));

  // Copy values from the JsonDocument to the Config
  config.cardNumber = doc["cardNumber"];
  // strlcpy(config.cardHolder,                  // <- destination
  //         doc["cardHolder"] | "example.com",  // <- source
  //         sizeof(config.cardHolder));         // <- destination's capacity

  // Close the file (Curiously, File's destructor doesn't close the file)
  file.close();
}

// Saves the configuration to a file
void saveConfiguration(const char *filename_conf, const Config &config) {
  // Delete existing file, otherwise the configuration is appended to the file
  //SD.remove(filename);

  // Open file for writing
  File file = LittleFS.open(filename, "w");
  if (!file) {
    Serial.println("Failed to open config file for writing");
    return;
  }
  // Allocate a temporary JsonDocument
  // Don't forget to change the capacity to match your requirements.
  // Use arduinojson.org/assistant to compute the capacity.
  StaticJsonDocument<256> doc;

  // Set the values in the document
  doc["cardHolder"] = config.cardHolder;
  doc["cardNumber"] = config.cardNumber;

  // Serialize JSON to file
  if (serializeJson(doc, file) == 0) {
    Serial.println(F("Failed to write to file"));
  }

  // Close the file
  file.close();
}

// Prints the content of a file to the Serial
void printFile(const char *filename_conf) {
  // Open file for reading

  File file = LittleFS.open(filename, "r");
  if (!file) {
    Serial.println("Failed to open data file");
    return;
  }
  // Extract each characters by one by one
  while (file.available()) {
    Serial.print((char)file.read());
  }
  Serial.println();

  // Close the file
  file.close();
}

void setup() {
  // Initialize serial port
  Serial.begin(115200);
  while (!Serial) continue;

  // Initialize SD library
  while (!LittleFS.begin()) {
    Serial.println(F("Failed to initialize SD library"));
    delay(1000);
  }

  // Should load default config if run for the first time
  // Serial.println(F("Loading configuration..."));
  // loadConfiguration(filename, config);

  // // Create configuration file
  // Serial.println(F("Saving configuration..."));
  // saveConfiguration(filename, config);

  // // Dump config file
  // Serial.println(F("Print config file..."));
  // printFile(filename);
}

void loop() {
  // not used in this example
  // config.cardNumber = config.cardNumber + 1;
  // Serial.println(config.cardNumber);
  // saveConfiguration(filename, config);
  // delay(1000);
}
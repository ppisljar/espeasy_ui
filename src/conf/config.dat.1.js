const TASKS_MAX = 12;
const NOTIFICATION_MAX = 3;
const CONTROLLER_MAX = 3;
const PLUGIN_CONFIGVAR_MAX = 8;
const PLUGIN_CONFIGFLOATVAR_MAX = 4;
const PLUGIN_CONFIGLONGVAR_MAX = 4;
const PLUGIN_EXTRACONFIGVAR_MAX = 16;
const NAME_FORMULA_LENGTH_MAX = 40;
const VARS_PER_TASK = 4;

export const configDatParseConfig = [
    { prop: 'status.PID', type: 'int32' },
    { prop: 'status.version', type: 'int32' },
    { prop: 'status.build', type: 'int16' },
    { prop: 'config.IP.ip', type: 'bytes', length: 4 },
    { prop: 'config.IP.gw', type: 'bytes', length: 4 }, 
    { prop: 'config.IP.subnet', type: 'bytes', length: 4 },
    { prop: 'config.IP.dns', type: 'bytes', length: 4 },
    { prop: 'IP_octet', type: 'byte' },
    { prop: 'config.general.unitnr', type: 'byte' },
    { prop: 'config.general.unitname', type: 'string', length: 26 },
    { prop: 'NTPHost', type: 'string', length: 64 },
    { prop: 'Delay', type: 'int32' },
    { prop: 'hardware.i2c.sda', type: 'byte' },
    { prop: 'hardware.i2c.scl', type: 'byte' },
    { prop: 'hardware.led.gpio', type: 'byte' },
    { prop: 'Pin_sd_cs', type: 'byte' },
    { prop: 'hardware.gpio', type: 'bytes', length: 17 },
    { prop: 'Syslog_IP', type: 'bytes', length: 4 },
    { prop: '___padding2', type: 'int16' },
    { prop: 'UDPPort', type: 'int16' },
    { prop: '___padding4', type: 'int16' },
    { prop: 'SyslogLevel', type: 'byte' },
    { prop: 'SerialLogLevel', type: 'byte' },
    { prop: 'WebLogLevel', type: 'byte' },
    { prop: 'SDLogLevel', type: 'byte' },
    { prop: 'BaudRate', type: 'int32' },
    { prop: 'MessageDelay', type: 'int32' },
    { prop: 'deepSleep', type: 'byte' },
    { prop: 'CustomCSS', type: 'byte' },
    { prop: 'DST', type: 'byte' },
    { prop: 'WDI2CAddress', type: 'byte' },
    { prop: 'UseRules', type: 'byte' },
    { prop: 'UseSerial', type: 'byte' },
    { prop: 'UseSSDP', type: 'byte' },
    { prop: 'UseNTP', type: 'byte' },
    { prop: 'WireClockStretchLimit', type: 'int32' },
    { prop: 'GlobalSync', type: 'byte' },
    { prop: 'ConnectionFailuresThreshold', type: 'int32' },
    { prop: 'TimeZone', type: 'int16', signed: true},
    { prop: 'MQTTRetainFlag', type: 'byte' },
    { prop: 'hardware.spi.enabled', type: 'byte' },
    { prop: 'Protocol', type: 'bytes', length: CONTROLLER_MAX },
    { prop: 'Notification', type: 'bytes', length: NOTIFICATION_MAX },, // till here its verified to be correct, but might be few next lines are still good
    { prop: 'TaskDeviceNumber', type: 'bytes', length: TASKS_MAX },
    { prop: 'OLD_TaskDeviceID', type: 'ints', length: TASKS_MAX }, 
    { prop: 'TaskDevicePin.1', type: 'bytes', length: TASKS_MAX },
    { prop: 'TaskDevicePin.2', type: 'bytes', length: TASKS_MAX },
    { prop: 'TaskDevicePin.3', type: 'bytes', length: TASKS_MAX },
    { prop: 'TaskDevicePin.4', type: 'bytes', length: TASKS_MAX },
    { prop: 'TaskDevicePin1PullUp', type: 'bytes', length: TASKS_MAX },
    { prop: 'TaskDevicePluginConfig.1', type: 'bytes', length: PLUGIN_CONFIGVAR_MAX },
    { prop: 'TaskDevicePluginConfig.2', type: 'bytes', length: PLUGIN_CONFIGVAR_MAX },
    { prop: 'TaskDevicePluginConfig.3', type: 'bytes', length: PLUGIN_CONFIGVAR_MAX },
    { prop: 'TaskDevicePluginConfig.4', type: 'bytes', length: PLUGIN_CONFIGVAR_MAX },
    { prop: 'TaskDevicePluginConfig.5', type: 'bytes', length: PLUGIN_CONFIGVAR_MAX },
    { prop: 'TaskDevicePluginConfig.6', type: 'bytes', length: PLUGIN_CONFIGVAR_MAX },
    { prop: 'TaskDevicePluginConfig.7', type: 'bytes', length: PLUGIN_CONFIGVAR_MAX },
    { prop: 'TaskDevicePluginConfig.8', type: 'bytes', length: PLUGIN_CONFIGVAR_MAX },
    { prop: 'TaskDevicePluginConfig.9', type: 'bytes', length: PLUGIN_CONFIGVAR_MAX },
    { prop: 'TaskDevicePluginConfig.10', type: 'bytes', length: PLUGIN_CONFIGVAR_MAX },
    { prop: 'TaskDevicePluginConfig.11', type: 'bytes', length: PLUGIN_CONFIGVAR_MAX },
    { prop: 'TaskDevicePluginConfig.12', type: 'bytes', length: PLUGIN_CONFIGVAR_MAX },
    { prop: 'TaskDevicePin1Inversed', type: 'bytes', length: TASKS_MAX }, // good till here ?
    { prop: 'TaskDevicePluginConfigFloat.1' ,type: 'floats', length: PLUGIN_CONFIGFLOATVAR_MAX }, // 12 * 4 * 4 = 192
    { prop: 'TaskDevicePluginConfigFloat.2' ,type: 'floats', length: PLUGIN_CONFIGFLOATVAR_MAX },
    { prop: 'TaskDevicePluginConfigFloat.3' ,type: 'floats', length: PLUGIN_CONFIGFLOATVAR_MAX },
    { prop: 'TaskDevicePluginConfigFloat.4' ,type: 'floats', length: PLUGIN_CONFIGFLOATVAR_MAX },
    { prop: 'TaskDevicePluginConfigFloat.5' ,type: 'floats', length: PLUGIN_CONFIGFLOATVAR_MAX },
    { prop: 'TaskDevicePluginConfigFloat.6' ,type: 'floats', length: PLUGIN_CONFIGFLOATVAR_MAX },
    { prop: 'TaskDevicePluginConfigFloat.7' ,type: 'floats', length: PLUGIN_CONFIGFLOATVAR_MAX },
    { prop: 'TaskDevicePluginConfigFloat.8' ,type: 'floats', length: PLUGIN_CONFIGFLOATVAR_MAX },
    { prop: 'TaskDevicePluginConfigFloat.9' ,type: 'floats', length: PLUGIN_CONFIGFLOATVAR_MAX },
    { prop: 'TaskDevicePluginConfigFloat.10' ,type: 'floats', length: PLUGIN_CONFIGFLOATVAR_MAX },
    { prop: 'TaskDevicePluginConfigFloat.11' ,type: 'floats', length: PLUGIN_CONFIGFLOATVAR_MAX },
    { prop: 'TaskDevicePluginConfigFloat.12' ,type: 'floats', length: PLUGIN_CONFIGFLOATVAR_MAX },
    { prop: 'TaskDevicePluginConfigLong.1' ,type: 'longs', length: PLUGIN_CONFIGLONGVAR_MAX }, // 192 /// 384        
    { prop: 'TaskDevicePluginConfigLong.2' ,type: 'longs', length: PLUGIN_CONFIGLONGVAR_MAX },
    { prop: 'TaskDevicePluginConfigLong.3' ,type: 'longs', length: PLUGIN_CONFIGLONGVAR_MAX },
    { prop: 'TaskDevicePluginConfigLong.4' ,type: 'longs', length: PLUGIN_CONFIGLONGVAR_MAX },
    { prop: 'TaskDevicePluginConfigLong.5' ,type: 'longs', length: PLUGIN_CONFIGLONGVAR_MAX },
    { prop: 'TaskDevicePluginConfigLong.6' ,type: 'longs', length: PLUGIN_CONFIGLONGVAR_MAX },
    { prop: 'TaskDevicePluginConfigLong.7' ,type: 'longs', length: PLUGIN_CONFIGLONGVAR_MAX },
    { prop: 'TaskDevicePluginConfigLong.8' ,type: 'longs', length: PLUGIN_CONFIGLONGVAR_MAX },
    { prop: 'TaskDevicePluginConfigLong.9' ,type: 'longs', length: PLUGIN_CONFIGLONGVAR_MAX },
    { prop: 'TaskDevicePluginConfigLong.10' ,type: 'longs', length: PLUGIN_CONFIGLONGVAR_MAX },
    { prop: 'TaskDevicePluginConfigLong.11' ,type: 'longs', length: PLUGIN_CONFIGLONGVAR_MAX },
    { prop: 'TaskDevicePluginConfigLong.12' ,type: 'longs', length: PLUGIN_CONFIGLONGVAR_MAX },
    { prop: 'OLD_TaskDeviceSendData', type: 'bytes', length: TASKS_MAX },
    { prop: 'TaskDeviceGlobalSync', type: 'bytes', length: TASKS_MAX },
    { prop: 'TaskDeviceDataFeed', type: 'bytes', length: TASKS_MAX },
    { prop: 'TaskDeviceTimer', type: 'longs', length: TASKS_MAX },
    { prop: 'TaskDeviceEnabled', type: 'bytes', length: TASKS_MAX },
    { prop: 'ControllerEnabled', type: 'bytes', length: NOTIFICATION_MAX },
    { prop: 'NotificationEnabled', type: 'bytes', length: CONTROLLER_MAX },
    { prop: 'TaskDeviceID.1', type: 'ints', length: TASKS_MAX },
    { prop: 'TaskDeviceID.2', type: 'ints', length: TASKS_MAX },
    { prop: 'TaskDeviceID.3', type: 'ints', length: TASKS_MAX },
    { prop: 'TaskDeviceSendData.1', type: 'bytes', length: TASKS_MAX }, // 3 * 12 = 36
    { prop: 'TaskDeviceSendData.2', type: 'bytes', length: TASKS_MAX },
    { prop: 'TaskDeviceSendData.3', type: 'bytes', length: TASKS_MAX },
    { prop: '__padding5', type: 'bytes', length: 194 },  // somewhere in above part we lost 194 bytes ... hmmm
    { prop: 'hardware.led.inverse', type: 'byte' }, // from here on it's correct again
    { prop: 'config.sleep.sleeponfailiure', type: 'byte' },
    { prop: 'UseValueLogger', type: 'byte' },
    { prop: 'ArduinoOTAEnable', type: 'byte' },
    { prop: 'DST_Start', type: 'int16' },
    { prop: 'DST_End', type: 'int16' },
    { prop: 'UseRTOSMultitasking', type: 'byte' },
    { prop: 'hardware.reset.pin', type: 'byte' }, 
    { prop: 'SyslogFacility', type: 'byte' }, 
    { prop: 'StructSize', type: 'int32' },
    { prop: 'MQTTUseUnitNameAsClientId', type: 'byte' },
    { prop: 'Latitude', type: 'float' },
    { prop: 'Longitude', type: 'float' },
    { prop: 'VariousBits1', type: 'int32' },
    { prop: 'ResetFactoryDefaultPreference', type: 'int32' },
];

export const TaskSettings = [
    { prop: 'index', type:'byte' },
    { prop: 'name', type:'string', length: NAME_FORMULA_LENGTH_MAX + 1 },
    [...Array(VARS_PER_TASK)].map((x, i) => ({ prop: `values[${i}].formula`, type:'string', length: NAME_FORMULA_LENGTH_MAX + 1 })),
    [...Array(VARS_PER_TASK)].map((x, i) => ({ prop: `values[${i}].name`, type:'string', length: NAME_FORMULA_LENGTH_MAX + 1 })),
    { prop: 'value_names', type:'string', length: NAME_FORMULA_LENGTH_MAX + 1 },
    { prop: 'plugin_config_long', type:'longs', length: PLUGIN_EXTRACONFIGVAR_MAX },
    { prop: 'decimals', type:'bytes', length: VARS_PER_TASK },
    { prop: 'plugin_config', type:'ints', length: PLUGIN_EXTRACONFIGVAR_MAX },
].flat();

export const ControllerSettings = [
    { prop: 'dns', type:'byte' },
    { prop: 'IP', type:'bytes', length: 4 },
    { prop: 'port', type:'int16' },
    { prop: 'hostname', type:'string', length: 65 },
    { prop: 'publish', type:'string', length: 129 },
    { prop: 'subscribe', type:'string', length: 129 },
    { prop: 'MQTT_lwt_topic', type:'string', length: 129 },
    { prop: 'lwt_message_connect', type:'string', length: 129 },
    { prop: 'lwt_message_disconnect', type:'string', length: 129 },
    { prop: 'minimal_time_between', type:'int16' },
    { prop: 'max_queue_depth', type:'int16' },
    { prop: 'max_retry', type:'int16' },
    { prop: 'delete_oldest', type:'byte' },
    { prop: 'client_timeout', type:'int16' },
    { prop: 'must_check_reply', type:'byte' },
];

export const NotificationSettings = [
    { prop: 'server', type:'string', length: 65 },
    { prop: 'port', type:'int16' },
    { prop: 'domain', type:'string', length: 65 },
    { prop: 'sender', type:'string', length: 65 },
    { prop: 'receiver', type:'string', length: 65 },
    { prop: 'subject', type:'string', length: 129 },
    { prop: 'body', type:'string', length: 513 },
    { prop: 'pin1', type:'byte' },
    { prop: 'pin2', type:'byte' },
    { prop: 'user', type:'string', length: 49 },
    { prop: 'pass', type:'string', length: 33 },
];

export const SecuritySettings = [
    { prop: 'WifiSSID', type:'string', length: 32 },
    { prop: 'WifiKey', type:'string', length: 64 },
    { prop: 'WifiSSID2', type:'string', length: 32 },
    { prop: 'WifiKey2', type:'string', length: 64 },
    { prop: 'WifiAPKey', type:'string', length: 64 },
    [...Array(CONTROLLER_MAX)].map((x, i) => ({ prop: `controllers[${i}].user`, type:'string', length: 26 })),
    [...Array(CONTROLLER_MAX)].map((x, i) => ({ prop: `controllers[${i}].password`, type:'string', length: 64 })),
    { prop: 'password', type:'string', length: 26 },
    { prop: 'AllowedIPrangeLow', type:'bytes', length: 4 },
    { prop: 'AllowedIPrangeHigh', type:'bytes', length: 4 },
    { prop: 'IPblockLevel', type:'byte' },
    { prop: 'ProgmemMd5', type:'bytes', length: 16 },
    { prop: 'md5', type:'bytes', length: 16 },
].flat();

export const loadConfig = () => {
    fetch('config.dat').then(response => response.arrayBuffer()).then(async response => { 
        const tasks = [...Array(12)].map((x, i) => {
            return {
                settings: parseConfig(response, TaskSettings, 1024*4 + 1024 * 2 * i),
                extra: parseConfig(response, TaskSettings, 1024*5 + 1024 * 2 * i),
            };
        });
    
        const controllers = [...Array(3)].map((x, i) => {
            return {
                settings: parseConfig(response, ControllerSettings, 1024*28 + 1024 * 2 * i),
                extra: parseConfig(response, ControllerSettings, 1024*29 + 1024 * 2 * i),
            };
        });
    
        const notificationResponse = await fetch('notification.dat').then(response => response.arrayBuffer());
        const notifications = [...Array(3)].map((x, i) => {
             return parseConfig(notificationResponse, NotificationSettings, 1024 * i);
        });
    
        const securityResponse = await fetch('notification.dat').then(response => response.arrayBuffer());
        const security = [...Array(3)].map((x, i) => {
             return parseConfig(securityResponse, SecuritySettings, 1024 * i);
        });
    
        const result = {
            ...parseConfig(response, configDatParseConfig),
            tasks, controllers, notifications, security
        };
        return result;
    }).then(sets => {
        settings.init(sets);
        console.log(sets);
    });
}

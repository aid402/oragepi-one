[
    {
        "id": "7bf67e21.0159c",
        "type": "debug",
        "z": "3e8ed86.2c2e428",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 530,
        "y": 240,
        "wires": []
    },
    {
        "id": "922bff76.e56a6",
        "type": "exec",
        "z": "3e8ed86.2c2e428",
        "command": "/usr/local/bin/RTIMULibDrive",
        "addpay": false,
        "append": "",
        "useSpawn": "true",
        "timer": "30",
        "oldrc": false,
        "name": "",
        "x": 260,
        "y": 240,
        "wires": [
            [
                "19ed1176.cb01ef"
            ],
            [
                "7bf67e21.0159c"
            ],
            []
        ]
    },
    {
        "id": "19ed1176.cb01ef",
        "type": "function",
        "z": "3e8ed86.2c2e428",
        "name": "filter",
        "func": "var text = msg.payload;\nif (text.includes(\"Sample rate\")) {\n    text = text.slice(text.indexOf(\"roll\")).split(\",\");\n    var i;\n    for (i = 0; i < text.length; i++) {\n\ttext[i] = text[i].trim().split(\":\");\n    }\n    msg.payload = text;\n}\nelse {\n    msg.payload = 0;\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 290,
        "y": 320,
        "wires": [
            [
                "8cea4964.272f58"
            ]
        ]
    },
    {
        "id": "8cea4964.272f58",
        "type": "switch",
        "z": "3e8ed86.2c2e428",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "0",
                "vt": "num"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "outputs": 2,
        "x": 410,
        "y": 320,
        "wires": [
            [],
            [
                "88c52ab2.c0e3c8",
                "50e994d1.69ab7c",
                "9b35de20.b7012"
            ]
        ]
    },
    {
        "id": "88c52ab2.c0e3c8",
        "type": "change",
        "z": "3e8ed86.2c2e428",
        "name": "roll",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "payload[0][0]",
                "tot": "msg"
            },
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload[0][1]",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 470,
        "y": 380,
        "wires": [
            [
                "9c65c027.90a6d",
                "d9ad12df.b2747"
            ]
        ]
    },
    {
        "id": "50e994d1.69ab7c",
        "type": "change",
        "z": "3e8ed86.2c2e428",
        "name": "pitch",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "payload[1][0]",
                "tot": "msg"
            },
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload[1][1]",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 470,
        "y": 420,
        "wires": [
            [
                "b52ea6e4.4851d8"
            ]
        ]
    },
    {
        "id": "9b35de20.b7012",
        "type": "change",
        "z": "3e8ed86.2c2e428",
        "name": "yaw",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "payload[2][0]",
                "tot": "msg"
            },
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload[2][1]",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 470,
        "y": 460,
        "wires": [
            [
                "468eca41.d79904"
            ]
        ]
    },
    {
        "id": "7e0e8eab.400bb",
        "type": "ui_button",
        "z": "3e8ed86.2c2e428",
        "name": "",
        "group": "b232712f.93397",
        "order": 2,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "start",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 110,
        "y": 180,
        "wires": [
            [
                "922bff76.e56a6"
            ]
        ]
    },
    {
        "id": "9c65c027.90a6d",
        "type": "udp out",
        "z": "3e8ed86.2c2e428",
        "name": "",
        "addr": "192.168.1.56",
        "iface": "",
        "port": "9999",
        "ipv": "udp4",
        "outport": "",
        "base64": false,
        "multicast": "false",
        "x": 670,
        "y": 320,
        "wires": []
    },
    {
        "id": "d9ad12df.b2747",
        "type": "mqtt out",
        "z": "3e8ed86.2c2e428",
        "name": "",
        "topic": "mpu9250/roll",
        "qos": "0",
        "retain": "",
        "broker": "728327dd.4ed828",
        "x": 630,
        "y": 380,
        "wires": []
    },
    {
        "id": "b52ea6e4.4851d8",
        "type": "mqtt out",
        "z": "3e8ed86.2c2e428",
        "name": "",
        "topic": "mpu9250/pitch",
        "qos": "0",
        "retain": "",
        "broker": "728327dd.4ed828",
        "x": 640,
        "y": 420,
        "wires": []
    },
    {
        "id": "468eca41.d79904",
        "type": "mqtt out",
        "z": "3e8ed86.2c2e428",
        "name": "",
        "topic": "mpu9250/yaw",
        "qos": "0",
        "retain": "",
        "broker": "728327dd.4ed828",
        "x": 640,
        "y": 460,
        "wires": []
    },
    {
        "id": "b232712f.93397",
        "type": "ui_group",
        "z": "",
        "name": "graph",
        "tab": "daccb687.471818",
        "order": 2,
        "disp": true,
        "width": "18"
    },
    {
        "id": "728327dd.4ed828",
        "type": "mqtt-broker",
        "z": "",
        "broker": "localhost",
        "port": "1883",
        "clientid": "",
        "usetls": false,
        "compatmode": true,
        "keepalive": "60",
        "cleansession": true,
        "willTopic": "",
        "willQos": "0",
        "willPayload": "",
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": ""
    },
    {
        "id": "daccb687.471818",
        "type": "ui_tab",
        "z": "",
        "name": "mpu9250",
        "icon": "dashboard"
    }
]

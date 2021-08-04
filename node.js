module.exports = function(RED) {
    function main(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            var paketVal = msg.payload.split(',');
            // 子機ID
            const childId = paketVal[0];
            // 親機ID
            const parentId = paketVal[1];
            // 温度
            var dst = parseInt(paketVal[2],16);
            var temp = -46.85+175.72*(dst/2**16);
            // 湿度
            dst = parseInt(paketVal[3], 16);
            var hum = -6+125*(dst/2**16);
            // 照度
            dst = parseInt(paketVal[4], 16);
            var illuminance = dst / 1.2;

            msg.payload = {
                childId: childId,
                parentId: parentId,
                temp: temp,
                hum: hum,
                illumi: illuminance
            };

            node.send(msg);
        });
    }
    RED.nodes.registerType("logbee-decoder", main);
 }
 
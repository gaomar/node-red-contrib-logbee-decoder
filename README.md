Logbeeから受信したデータを見やすくデコードするノードです。

## Logbee
[Logbee](https://www.chitose-kk.co.jp/logbee/product)

## インストール

```shell
npm i node-red-contrib-logbee-decoder
```

## 利用イメージ

### logbee-decorder
serial inノードで受信したLobbeeのデータを見やすくデコードします。

```json
{
    "childId": "子機Id",
    "parentId": "親機Id",
    "temp": 25.0,           // 温度
    "hum": 50.0,            // 湿度
    "illumi": 320           // 照度
}
```

## LINK

* [NodeRED](https://flows.nodered.org/node/node-red-contrib-logbee-decoder)
* [Libraries.io](https://libraries.io/npm/node-red-contrib-logbee-decoder)
* [npm](https://www.npmjs.com/package/node-red-contrib-logbee-decoder)

## release
* 2021/08/04: 初回リリース
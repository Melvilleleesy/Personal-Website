// Blue Sea Configuration
const blueSeaTileSheet = new Image();
blueSeaTileSheet.src = 'static/images/sea-blue-tileset.png';

const hubTileSheet = new Image();
hubTileSheet.src = 'static/images/hub-tileset.png';

const HUB_TILE_REFERENCE = {
    "s-1-": {x: 0, y: 0, description: "statue 1"},
    "s-2-": {x: 1, y: 0, description: "statue 2"},
    "s-3-": {x: 0, y: 1, description: "statue 3"},
    "s-4-": {x: 1, y: 1, description: "statue 4"},
    "dtl-": {x: 0, y: 2, description: "dark grass patch top left corner"},
    "dbl-": {x: 1, y: 2, description: "dark grass patch bottom left corner"},
    "dtr-": {x: 0, y: 3, description: "dark grass patch top right corner"},
    "dbr-": {x: 1, y: 3, description: "dark grass patch bottom right corner"},
    "d-h-": {x: 0, y: 4, description: "dark grass patch horizontal path"},
    "d-v-": {x: 1, y: 4, description: "dark grass patch vertical path"},
    "d-e-": {x: 0, y: 5, description: "dark grass patch empty patch"},
    "iltl": {x: 1, y: 5, description: "inner light road patch top left corner"},
    "ilbl": {x: 0, y: 6, description: "inner light road patch bottom left corner"},
    "iltr": {x: 1, y: 6, description: "inner light road patch top right corner"},
    "ilbr": {x: 0, y: 7, description: "inner light road patch bottom right corner"},
    "oltl": {x: 1, y: 7, description: "outer light road patch top left corner"},
    "olbl": {x: 0, y: 8, description: "outer light road patch bottom left corner"},
    "oltr": {x: 1, y: 8, description: "outer light road patch top right corner"},
    "olbr": {x: 0, y: 9, description: "outer light road patch bottom right corner"},
    "lth-": {x: 1, y: 9, description: "light road patch top horizontal path"},
    "lbh-": {x: 0, y: 10, description: "light road patch bottom horizontal path"},
    "lrv-": {x: 1, y: 10, description: "light road patch right vertical path"},
    "llv-": {x: 0, y: 11, description: "light road patch left vertical path"},
    "l-e-": {x: 1, y: 11, description: "light road patch empty patch"},
    "stl-": {x: 0, y: 12, description: "sand top left corner"},
    "sbl-": {x: 1, y: 12, description: "sand bottom left corner"},
    "str-": {x: 0, y: 13, description: "sand top right corner"},
    "sbr-": {x: 1, y: 13, description: "sand bottom right corner"},
    "sth-": {x: 0, y: 14, description: "sand top horizontal path"},
    "sbh-": {x: 1, y: 14, description: "sand bottom horizontal path"},
    "slv-": {x: 0, y: 15, description: "sand left vertical path"},
    "srv-": {x: 1, y: 15, description: "sand right vertical path"},
    "s-e-": {x: 0, y: 16, description: "sand empty"}
};

const HUB_TILEMAP = [
    ["s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "stl-", "sth-", "sth-", "sth-", "sth-", "sth-", "sth-", "sth-", "sth-", "sth-", "sth-", "sth-", "sth-", "sth-", "sth-", "sth-", "sth-", "sth-", "sth-", "sth-", "sth-", "sth-", "sth-", "sth-", "sth-", "sth-", "sth-", "sth-", "sth-", "str-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "d-e-", "d-e-", "iltl", "lth-", "lth-", "lth-", "lth-", "lth-", "lth-", "lth-", "lth-", "olbr", "l-e-", "l-e-", "olbl", "lth-", "lth-", "lth-", "lth-", "lth-", "lth-", "lth-", "lth-", "iltr", "d-e-", "d-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "oltl", "lbh-", "lbh-", "lbh-", "lbh-", "lbh-", "lbh-", "oltr", "l-e-", "l-e-", "oltl", "lbh-", "lbh-", "lbh-", "lbh-", "lbh-", "lbh-", "oltr", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "lrv-", "d-e-", "d-e-", "iltl", "lth-", "iltr", "d-e-", "llv-", "l-e-", "l-e-", "lrv-", "d-e-", "iltl", "lth-", "iltr", "d-e-", "d-e-", "llv-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "lrv-", "d-e-", "d-e-", "llv-", "s-1-", "lrv-", "d-e-", "llv-", "l-e-", "l-e-", "lrv-", "d-e-", "llv-", "s-2-", "lrv-", "d-e-", "d-e-", "llv-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "lrv-", "d-e-", "d-e-", "ilbl", "lbh-", "ilbr", "d-e-", "llv-", "l-e-", "l-e-", "lrv-", "d-e-", "ilbl", "lbh-", "ilbr", "d-e-", "d-e-", "llv-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "lth-", "lth-", "olbr", "l-e-", "olbl", "lth-", "lth-", "lth-", "lth-", "lth-", "lth-", "olbr", "l-e-", "l-e-", "olbl", "lth-", "lth-", "lth-", "lth-", "lth-", "lth-", "olbr", "l-e-", "olbl", "lth-", "lth-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "lbh-", "lbh-", "oltr", "l-e-", "oltl", "lbh-", "lbh-", "lbh-", "lbh-", "lbh-", "lbh-", "oltr", "l-e-", "l-e-", "oltl", "lbh-", "lbh-", "lbh-", "lbh-", "lbh-", "lbh-", "oltr", "l-e-", "oltl", "lbh-", "lbh-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "lrv-", "d-e-", "d-e-", "iltl", "lth-", "iltr", "d-e-", "llv-", "l-e-", "l-e-", "lrv-", "d-e-", "iltl", "lth-", "iltr", "d-e-", "d-e-", "llv-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "lrv-", "d-e-", "d-e-", "llv-", "s-3-", "lrv-", "d-e-", "llv-", "l-e-", "l-e-", "lrv-", "d-e-", "llv-", "s-4-", "lrv-", "d-e-", "d-e-", "llv-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "lrv-", "d-e-", "d-e-", "ilbl", "lbh-", "ilbr", "d-e-", "llv-", "l-e-", "l-e-", "lrv-", "d-e-", "ilbl", "lbh-", "ilbr", "d-e-", "d-e-", "llv-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "olbl", "lth-", "lth-", "lth-", "lth-", "lth-", "lth-", "olbr", "l-e-", "l-e-", "olbl", "lth-", "lth-", "lth-", "lth-", "lth-", "lth-", "olbr", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "d-e-", "d-e-", "ilbl", "lbh-", "lbh-", "lbh-", "lbh-", "lbh-", "lbh-", "lbh-", "lbh-", "oltr", "l-e-", "l-e-", "oltl", "lbh-", "lbh-", "lbh-", "lbh-", "lbh-", "lbh-", "lbh-", "lbh-", "ilbr", "d-e-", "d-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "llv-", "l-e-", "l-e-", "lrv-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "slv-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "d-e-", "srv-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "sbl-", "sbh-", "sbh-", "sbh-", "sbh-", "sbh-", "sbh-", "sbh-", "sbh-", "sbh-", "sbh-", "sbh-", "sbh-", "sbh-", "sbh-", "sbh-", "sbh-", "sbh-", "sbh-", "sbh-", "sbh-", "sbh-", "sbh-", "sbh-", "sbh-", "sbh-", "sbh-", "sbh-", "sbh-", "sbr-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-"],
    ["s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-", "s-e-"]
] 


let hubBackgroundCache = null;
let hubCacheCtx = null;
let hubCacheReady = false;
let hubCollisionCache = null;

const HUB_MAP = {
    name: 'HUB',        
    width: 2304, // 36         
    height: 2304, // 36
    transitions: [
        { type: 'edge', side: 'right', x: 2200, yStart: 1050, yEnd: 1250, goTo: 'ICE', startX: 30, startY: 1150 }, // done
        { type: 'edge', side: 'down', y: 2200, xStart: 1050, xEnd: 1250, goTo: 'FOREST', startX: 928, startY: 30 }, // done
        { type: 'edge', side: 'left', x: 20, yStart: 1050, yEnd: 1250, goTo: 'BEACH', startX: 2200, startY: 1350 }, // done
        { type: 'edge', side: 'up', y: 20, xStart: 1050, xEnd: 1250, goTo: 'MAGMA', startX: 1280, startY: 2200 } // 
    ],
    
    drawBackground: function(ctx, camera) {
        // Draw Sea Background
        SEA_BACKGROUND.draw(blueSeaTileSheet, ctx, camera);

        // Initialize cache if not done yet
        if (!hubBackgroundCache) {
            const cacheData = CACHE.initializeBackgroundCache(36, 36);
            hubBackgroundCache = cacheData.backgroundCache;
            hubCacheCtx = cacheData.cacheCtx;
        }
        if (!hubCacheReady && hubTileSheet.complete) {
            if (CACHE.renderBackgroundCache(hubTileSheet, "HUB", HUB_TILEMAP, HUB_TILE_REFERENCE, hubBackgroundCache, hubCacheCtx, 36, 36)) {
                hubCacheReady = true;
            }
        }
        
        // If cache is ready, just copy the visible portion
        if (hubCacheReady) {
            this.drawFromCache(ctx, camera);
        } else {
            // Fallback: fill with solid color while loading
            ctx.fillStyle = '#0d0d0dff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        
        // Draw boundaries
        this.drawBoundaries(ctx, camera);
    },
    
    drawFromCache: function(ctx, camera) {
        // Simply copy the visible portion from cache to main canvas
        ctx.drawImage(
            hubBackgroundCache,           // Source: our pre-rendered cache
            camera.x, camera.y,        // Source position in cache
            camera.width, camera.height, // Source size
            0, 0,                      // Destination position (screen top-left)
            camera.width, camera.height  // Destination size
        );
    },

    drawBoundaries: function(ctx, camera) {
        ctx.strokeStyle = '#111111';
        ctx.lineWidth = 3;
        const topLeft = camera.worldToScreen(0, 0);
        const bottomRight = camera.worldToScreen(this.width, this.height);
        
        ctx.strokeRect(topLeft.x, topLeft.y, 
                      bottomRight.x - topLeft.x, 
                      bottomRight.y - topLeft.y);
    }
};
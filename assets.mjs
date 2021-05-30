export const layers =
{
    "background": {},
    "background-wall": {},
    "background-furniture": {},
    "accessory-back": {},
    "mane-back": {},
    "body": {},
    "body-markings": {},
    "mane-side": {},
    "ear": {},
    "horn": {},
    "mane-top": {},
    "accessory-top": {}
}

export const colors =
{
    "mane1": { "displayName": "Mane main" },
    "mane2": { "displayName": "Mane secondary" },
    "maneAcc": { "displayName": "Mane accessory" },
    "coat1": { "displayName": "Coat main" },
    "coat2": { "displayName": "Coat markings" },
    "bg1": { "displayName": "Background tint main" },
    "acc1": { "displayName": "Accessory main" },
}

function init() {
    // normalizing assets
    for (const typeName in assets) {
        const type = assets[typeName];
        for (const itemName in type.items) {
            const item = type.items[itemName];
            if (!item.type) item.type = "image";
            if (!item.layer) item.layer = type.layer;
            if (!item.color) item.color = type.color;
            if (!item.displayName) item.displayName = itemName;

            if (item.components) {
                for (const comp of item.components) {
                    if (!comp.layer) comp.layer = item.layer;
                    if (!comp.color) comp.color = item.color;
                }
            }
        }
    }
}

export const assets =
{
    "background": {
        "displayName": "Backgrounds",
        "layer": "background",
        "color": "bg1",
        "items":
        {
            "backalley1": {
                "displayName": "Seedy back alley",
                "url": "assets/background/backalley.png"
            },
            "explosion1": {
                "displayName": "Nuclear explosion",
                "url": "assets/background/explosion.png"
            },
            "hills1": {
                "displayName": "Rolling hills",
                "url": "assets/background/hills.png"
            },
            "castle1": {
                "displayName": "Castle grounds",
                "url": "assets/background/castle.png"
            },
            "none": {
                "displayName": "Transparent background",
                "type": "composite", "components": []
            },
            "simple": {
                "displayName": "Simple color",
                "url": "assets/background/simple.png"
            }
        }
    },
    "body": {
        "displayName": "Body type",
        "layer": "body",
        "color": "coat1",
        "items":
        {
            "earth_mare": {
                "displayName": "Adult pony mare",
                "type": "composite",
                "components":
                    [
                        { "url": "assets/body/head.png" },
                        { "url": "assets/body/ear.png", "layer": "ear" },
                        { "url": "assets/body/ear-inner.png", "layer": "ear" },
                        { "url": "assets/body/mouth.png" }
                    ]
            },
            "unicorn_mare": {
                "displayName": "Adult unicorn mare",
                "type": "composite",
                "components":
                    [
                        { "url": "assets/body/head.png" },
                        { "url": "assets/body/mouth.png" },
                        { "url": "assets/body/ear.png", "layer": "ear" },
                        { "url": "assets/body/ear-inner.png", "layer": "ear" },
                        { "url": "assets/body/horn.png", "layer": "horn" },
                        { "url": "assets/body/horn-grooves.png", "layer": "horn" }
                    ]
            },
            "thestral_mare": {
                "displayName": "Adult thestral mare",
                "type": "composite",
                "components":
                    [
                        { "url": "assets/body/head.png" },
                        { "url": "assets/body/ear.png", "layer": "ear" },
                        { "url": "assets/body/ear-fluff.png", "layer": "ear" },
                        { "url": "assets/body/ear-inner.png", "layer": "ear" },
                        { "url": "assets/body/mouth.png" },
                        {
                            "url": "assets/fang.png",
                            "layer": "accessory-top",
                            "color": "none"
                        }
                    ]
            }
        }
    },
    "mane": {
        "displayName": "Manestyles",
        "layer": "mane-top",
        "color": "mane1",
        "items":
        {
            "nocturnal_pike": {
                "displayName": "Sergeant Nocturnal Pike",
                "type": "composite",
                "components":
                    [
                        {
                            "url": "assets/mane/hair-back-pike.png",
                            "layer": "mane-back",
                            "color": "mane2"
                        },
                        {
                            "url": "assets/mane/hair-side-pike.png",
                            "layer": "mane-side"
                        },
                        {
                            "url": "assets/mane/hair-top-pike.png",
                            "layer": "mane-top"
                        }
                    ]
            },
            "molly_cutter": {
                "displayName": "Molly Cutter",
                "type": "composite",
                "components":
                    [
                        {
                            "url": "assets/mane/hair-back-molly.png",
                            "layer": "mane-back",
                            "color": "mane2"
                        },
                        {
                            "url": "assets/mane/hair-side-molly.png",
                            "layer": "mane-side"
                        },
                        {
                            "url": "assets/mane/hair-top-molly.png",
                            "layer": "mane-top"
                        }
                    ]
            },
            "applejack": {
                "displayName": "Applejack",
                "type": "composite",
                "components":
                    [
                        {
                            "url": "assets/mane/hair-side-aj.png",
                            "layer": "mane-side",
                        },
                        {
                            "url": "assets/mane/hairtie-aj.png",
                            "layer": "mane-side",
                            "color": "maneAcc"
                        },
                        {
                            "url": "assets/mane/hair-top-aj.png",
                            "layer": "mane-top"
                        },
                    ]
            },
            "bombshell": {
                "displayName": "Bombshell",
                "type": "composite",
                "components":
                    [
                        {
                            "url": "assets/mane/hair-back-bombshell.png",
                            "layer": "mane-back",
                        },
                        {
                            "url": "assets/mane/hair-back-2-bombshell.png",
                            "layer": "mane-back",
                            "color": "mane2"
                        },
                        {
                            "url": "assets/mane/hair-side-bombshell.png",
                            "layer": "mane-side",
                        },
                        {
                            "url": "assets/mane/hair-side-2-bombshell.png",
                            "layer": "mane-side",
                            "color": "mane2"
                        },
                        {
                            "url": "assets/mane/hairclip-bombshell.png",
                            "layer": "mane-side",
                            "color": "maneAcc"
                        },
                        {
                            "url": "assets/mane/hair-top-bombshell.png",
                            "layer": "mane-top",
                        },
                        {
                            "url": "assets/mane/hair-top-2-bombshell.png",
                            "layer": "mane-top",
                            "color": "mane2"
                        },
                    ]
            }
        }
    },
    "accessories": {
        "displayName": "Accessories",
        "layer": "accessory-top",
        "color": "acc1",
        "items":
        {
            "none": {
                "displayName": "None",
                "type": "composite", "components": []
            },
            "knife": {
                "displayName": "Long sharp knife",
                "url": "assets/accessory/knife.png"
            },
            "hat": {
                "displayName": "Cowpony hat",
                "url": "assets/accessory/hat-aj.png",
                "layer": "accessory-back"
            },
            "magic": {
                "displayName": "Forbidden magicks",
                "url": "assets/accessory/magic.png"
            },
        }
    },
    "snowpitys": {
        "displayName": "Snowpitys",
        "items":
        {
            "hefty": {
                "displayName": "Hefty",
                "type": "composite",
                "components": []
            },
            "sultry": {
                "displayName": "Sultry",
                "type": "composite",
                "components": []
            },
            "cozy": {
                "displayName": "Cozy",
                "type": "composite",
                "components": []
            }
        }
    }
}


init();
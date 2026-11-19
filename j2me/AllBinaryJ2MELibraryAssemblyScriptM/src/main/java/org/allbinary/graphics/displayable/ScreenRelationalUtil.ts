// Generated Code Do Not Modify
// package org.allbinary.graphics.displayable
// import javax.microedition.lcdui.Image

@global export class ScreenRelationalUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.displayable.ScreenRelationalUtil";
    }
    @lazy static jv_instance: ScreenRelationalUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ScreenRelationalUtil | null {
        if (!ScreenRelationalUtil.js_instance) {
            ScreenRelationalUtil.js_instance = true;
            ScreenRelationalUtil.jv_instance = new ScreenRelationalUtil().jinit_ScreenRelationalUtil_0();
        }
        return ScreenRelationalUtil.jv_instance;
    }
    static set instance(value: ScreenRelationalUtil | null) {
        ScreenRelationalUtil.js_instance = true;
        ScreenRelationalUtil.jv_instance = value;
    }

    jinit_ScreenRelationalUtil_0(): ScreenRelationalUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): ScreenRelationalUtil | null {
        return ScreenRelationalUtil.instance;
    }
    

    getScaleImage(image: Image | null): f32 {
        return this.getScaleWH(image!.getWidth(), image!.getHeight());
    }
    

    getScaleWH(aWidth: i32, aHeight: i32): f32 {
        return this.getScaleWHA(aWidth, aHeight, 20);
    }
    

    getScaleWHA(aWidth: i32, aHeight: i32, add: i32): f32 {
        let displayInfoSingleton: DisplayInfoSingleton | null = DisplayInfoSingleton.getInstance(); if (JThrowable.pending !== null) return 0.0;
        let last: StaticArray<i32> | null = displayInfoSingleton!.getLast(); if (JThrowable.pending !== null) return 0.0;
        let width: f32 = (<f32>(last![displayInfoSingleton!.WIDTH]));
        let height: f32 = (<f32>(last![displayInfoSingleton!.HEIGHT]));
        let largestSize: f32 = width;
        if (largestSize < height) {
            largestSize = height;
        }
        let scale: f32 = (largestSize) / (<f32>(aWidth));
        return scale;
    }
    

    getScaledHeight(aWidth: i32, aHeight: i32): i32 {
        return JMath.toInt((this.getScaleWH(aWidth, aHeight) * (<f32>(aHeight))));
    }
    

    getScaledHeightAdd(aWidth: i32, aHeight: i32, add: i32): i32 {
        return JMath.toInt((this.getScaleWHA(aWidth, aHeight, add) * (<f32>(aHeight))));
    }
}


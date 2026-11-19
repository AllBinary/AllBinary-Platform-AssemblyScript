/*
 *
 * AllBinary Open License Version 1
 * Copyright (c) 2011 AllBinary
 * 
 * By agreeing to this license you and any business entity you represent are
 * legally bound to the AllBinary Open License Version 1 legal agreement.
 * 
 * You may obtain the AllBinary Open License Version 1 legal agreement from
 * AllBinary or the root directory of AllBinary's AllBinary Platform repository.
 * 
 * Created By: Travis Berthelot
 *  
 */
// Generated Code Do Not Modify
// package org.allbinary.graphics.color

@global export class ColorTemperatureUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.color.ColorTemperatureUtil";
    }
    @lazy static jv_instance: ColorTemperatureUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ColorTemperatureUtil | null {
        if (!ColorTemperatureUtil.js_instance) {
            ColorTemperatureUtil.js_instance = true;
            ColorTemperatureUtil.jv_instance = new ColorTemperatureUtil().jinit_ColorTemperatureUtil_0();
        }
        return ColorTemperatureUtil.jv_instance;
    }
    static set instance(value: ColorTemperatureUtil | null) {
        ColorTemperatureUtil.js_instance = true;
        ColorTemperatureUtil.jv_instance = value;
    }
    basicColorFactory: BasicColorFactory | null = null;

    jfields_ColorTemperatureUtil(): void {
    this.basicColorFactory = BasicColorFactory.getInstance();
    }

    jinit_ColorTemperatureUtil_0(): ColorTemperatureUtil {
        super.jinit_JObject_0();
        this.jfields_ColorTemperatureUtil();
        return this;
    }
    

    static getInstance(): ColorTemperatureUtil | null {
        return ColorTemperatureUtil.instance;
    }
    

    getBasicColor(thirdTemp: i32): BasicColor | null {
        let basicColor: BasicColor | null = this.basicColorFactory!.RED;
        if (thirdTemp > 3700) {
            basicColor = this.basicColorFactory!.PURPLE;
        } else if (thirdTemp > 3200) {
            basicColor = this.basicColorFactory!.BLUE;
        } else if (thirdTemp > 2700) {
            basicColor = this.basicColorFactory!.PUCE;
        } else if (thirdTemp > 2200) {
            basicColor = this.basicColorFactory!.WHITE;
        } else if (thirdTemp > 1700) {
            basicColor = this.basicColorFactory!.GREEN;
        } else if (thirdTemp > 1200) {
            basicColor = this.basicColorFactory!.YELLOW;
        } else if (thirdTemp > 700) {
            basicColor = this.basicColorFactory!.ORANGE;
        }
        return basicColor;
    }
}


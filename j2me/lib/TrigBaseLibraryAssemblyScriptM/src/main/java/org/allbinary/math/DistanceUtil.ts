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
// package org.allbinary.math
// import org.allbinary.logic.math.MathUtil

@global export class DistanceUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.math.DistanceUtil";
    }
    @lazy static jv_instance: DistanceUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): DistanceUtil | null {
        if (!DistanceUtil.js_instance) {
            DistanceUtil.js_instance = true;
            DistanceUtil.jv_instance = new DistanceUtil().jinit_DistanceUtil_0();
        }
        return DistanceUtil.jv_instance;
    }
    static set instance(value: DistanceUtil | null) {
        DistanceUtil.js_instance = true;
        DistanceUtil.jv_instance = value;
    }
    mathUtil: MathUtil | null = null;

    jfields_DistanceUtil(): void {
    this.mathUtil = MathUtil.getInstance();
    }

    jinit_DistanceUtil_0(): DistanceUtil {
        super.jinit_JObject_0();
        this.jfields_DistanceUtil();
        return this;
    }
    

    static getInstance(): DistanceUtil | null {
        return DistanceUtil.instance;
    }
    

    getDistance(x1: i32, y1: i32, x2: i32, y2: i32): i32 {
        let dx: i32 = x1 - x2;
        let dy: i32 = y1 - y2;
        return this.mathUtil!.sqrt((dx * dx) + (dy * dy));
    }
}


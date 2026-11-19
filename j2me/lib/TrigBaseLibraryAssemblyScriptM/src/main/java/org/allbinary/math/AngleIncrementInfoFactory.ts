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

@global export class AngleIncrementInfoFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.math.AngleIncrementInfoFactory";
    }
    @lazy static jv_instance: AngleIncrementInfoFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AngleIncrementInfoFactory | null {
        if (!AngleIncrementInfoFactory.js_instance) {
            AngleIncrementInfoFactory.js_instance = true;
            AngleIncrementInfoFactory.jv_instance = new AngleIncrementInfoFactory().jinit_AngleIncrementInfoFactory_0();
        }
        return AngleIncrementInfoFactory.jv_instance;
    }
    static set instance(value: AngleIncrementInfoFactory | null) {
        AngleIncrementInfoFactory.js_instance = true;
        AngleIncrementInfoFactory.jv_instance = value;
    }
    angleIncrementInfo: StaticArray<AngleIncrementInfo | null> | null = null;

    jfields_AngleIncrementInfoFactory(): void {
    this.angleIncrementInfo = new StaticArray<AngleIncrementInfo | null>((<i32>(AngleFactory.getInstance()!.TOTAL_ANGLE)));
    }

    jinit_AngleIncrementInfoFactory_0(): AngleIncrementInfoFactory {
        super.jinit_JObject_0();
        this.jfields_AngleIncrementInfoFactory();
        return this;
    }
    

    static getInstance(): AngleIncrementInfoFactory | null {
        return AngleIncrementInfoFactory.instance;
    }
    

    getAt(angleIncrement: i16): AngleIncrementInfo | null {
        let halfAngleIncrement: i32 = ((<i32>(angleIncrement)) >> 1);
        let angleIncrementInfo: AngleIncrementInfo | null = null;
        let angleIncrementInfoCanBeNull: AngleIncrementInfo | null = this.angleIncrementInfo![halfAngleIncrement];
        if (angleIncrementInfoCanBeNull == null) {
            angleIncrementInfo = new AngleIncrementInfo().jinit_AngleIncrementInfo_1(angleIncrement); if (JThrowable.pending !== null) return null;
            this.angleIncrementInfo![halfAngleIncrement] = angleIncrementInfo;
            return angleIncrementInfo;
        } else {
            angleIncrementInfo = angleIncrementInfoCanBeNull;
        } if (JThrowable.pending !== null) return null;
        return angleIncrementInfo;
    }
}


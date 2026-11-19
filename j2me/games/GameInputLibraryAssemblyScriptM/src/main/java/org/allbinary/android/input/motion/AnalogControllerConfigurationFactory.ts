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
// package org.allbinary.android.input.motion
// import org.allbinary.android.input.motion.event.AnalogControllerConfigurationEvent
// import org.allbinary.android.input.motion.event.AnalogControllerConfigurationEventHandler
// import org.allbinary.logic.math.ScaleFactorFactory

@global export class AnalogControllerConfigurationFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.android.input.motion.AnalogControllerConfigurationFactory";
    }
    @lazy static jv_instance: AnalogControllerConfigurationFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AnalogControllerConfigurationFactory | null {
        if (!AnalogControllerConfigurationFactory.js_instance) {
            AnalogControllerConfigurationFactory.js_instance = true;
            AnalogControllerConfigurationFactory.jv_instance = new AnalogControllerConfigurationFactory().jinit_AnalogControllerConfigurationFactory_0();
        }
        return AnalogControllerConfigurationFactory.jv_instance;
    }
    static set instance(value: AnalogControllerConfigurationFactory | null) {
        AnalogControllerConfigurationFactory.js_instance = true;
        AnalogControllerConfigurationFactory.jv_instance = value;
    }
    SCALE_FACTOR: i32 = 0;
    SCALE_VALUE: i32 = 0;
    available: bool = false;
    analogControllerConfigurationEvent: AnalogControllerConfigurationEvent | null = null;

    jfields_AnalogControllerConfigurationFactory(): void {
    this.SCALE_FACTOR = ScaleFactorFactory.getInstance()!.DEFAULT_SCALE_FACTOR;
    this.SCALE_VALUE = ScaleFactorFactory.getInstance()!.DEFAULT_SCALE_VALUE;
    this.available = false;
    this.analogControllerConfigurationEvent = new AnalogControllerConfigurationEvent().jinit_AnalogControllerConfigurationEvent_1(this);
    }
    

    static getInstance(): AnalogControllerConfigurationFactory | null {
        return AnalogControllerConfigurationFactory.instance;
    }
    

    jinit_AnalogControllerConfigurationFactory_0(): AnalogControllerConfigurationFactory {
        super.jinit_JObject_0();
        this.jfields_AnalogControllerConfigurationFactory();
        return this;
    }
    

    isAvailable(): bool {
        return this.available;
    }
    

    setAvailable(available: bool): void {
        this.available = available;
        AnalogControllerConfigurationEventHandler.getInstance()!.fireEvent(this.analogControllerConfigurationEvent); if (JThrowable.pending !== null) return;
    }
}


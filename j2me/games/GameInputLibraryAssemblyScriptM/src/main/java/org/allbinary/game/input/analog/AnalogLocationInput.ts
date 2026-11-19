// Generated Code Do Not Modify
// package org.allbinary.game.input.analog
// import org.allbinary.graphics.CustomGPoint

@global export class AnalogLocationInput extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.analog.AnalogLocationInput";
    }
    @lazy static jv_NULL_ANALOG_LOCATION_INPUT: AnalogLocationInput | null = null;
    @lazy static js_NULL_ANALOG_LOCATION_INPUT: bool = false;
    static get NULL_ANALOG_LOCATION_INPUT(): AnalogLocationInput | null {
        if (!AnalogLocationInput.js_NULL_ANALOG_LOCATION_INPUT) {
            AnalogLocationInput.js_NULL_ANALOG_LOCATION_INPUT = true;
            AnalogLocationInput.jv_NULL_ANALOG_LOCATION_INPUT = new AnalogLocationInput().jinit_AnalogLocationInput_1(-1);
        }
        return AnalogLocationInput.jv_NULL_ANALOG_LOCATION_INPUT;
    }
    static set NULL_ANALOG_LOCATION_INPUT(value: AnalogLocationInput | null) {
        AnalogLocationInput.js_NULL_ANALOG_LOCATION_INPUT = true;
        AnalogLocationInput.jv_NULL_ANALOG_LOCATION_INPUT = value;
    }
    playerId: i32 = 0;
    customGPoint: CustomGPoint | null = null;
    rz: i32 = 0;
    rightTrigger: i32 = 0;
    leftTrigger: i32 = 0;

    jfields_AnalogLocationInput(): void {
    
    
    this.rz = 0;
    this.rightTrigger = 0;
    this.leftTrigger = 0;
    }
    

    jinit_AnalogLocationInput_1(playerId: i32): AnalogLocationInput {
        super.jinit_JObject_0();
        this.jfields_AnalogLocationInput();
        this.playerId = playerId;
        this.customGPoint = new CustomGPoint().jinit_CustomGPoint_3(0, 0, 0); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getPlayerId(): i32 {
        return this.playerId;
    }
    

    getCustomGPoint(): CustomGPoint | null {
        return this.customGPoint;
    }
    

    getRz(): i32 {
        return this.rz;
    }
    

    setRz(rz: i32): void {
        this.rz = rz;
    }
    

    getRightTrigger(): i32 {
        return this.rightTrigger;
    }
    

    setRightTrigger(rightTrigger: i32): void {
        this.rightTrigger = rightTrigger;
    }
    

    getLeftTrigger(): i32 {
        return this.leftTrigger;
    }
    

    setLeftTrigger(leftTrigger: i32): void {
        this.leftTrigger = leftTrigger;
    }
}


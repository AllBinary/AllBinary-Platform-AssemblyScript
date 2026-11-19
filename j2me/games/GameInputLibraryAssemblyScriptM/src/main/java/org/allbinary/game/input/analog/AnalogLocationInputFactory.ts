// Generated Code Do Not Modify
// package org.allbinary.game.input.analog
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class AnalogLocationInputFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.analog.AnalogLocationInputFactory";
    }
    @lazy static jv_instance: AnalogLocationInputFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AnalogLocationInputFactory | null {
        if (!AnalogLocationInputFactory.js_instance) {
            AnalogLocationInputFactory.js_instance = true;
            AnalogLocationInputFactory.jv_instance = new AnalogLocationInputFactory().jinit_AnalogLocationInputFactory_0();
        }
        return AnalogLocationInputFactory.jv_instance;
    }
    static set instance(value: AnalogLocationInputFactory | null) {
        AnalogLocationInputFactory.js_instance = true;
        AnalogLocationInputFactory.jv_instance = value;
    }
    list: BasicArrayList | null = null;

    jfields_AnalogLocationInputFactory(): void {
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    }
    

    static getInstance(): AnalogLocationInputFactory | null {
        return AnalogLocationInputFactory.instance;
    }
    

    jinit_AnalogLocationInputFactory_0(): AnalogLocationInputFactory {
        super.jinit_JObject_0();
        this.jfields_AnalogLocationInputFactory();
        return this;
    }
    

    addPlayer(playerInputId: i32): void {
        let analogLocationInput: AnalogLocationInput | null = AnalogLocationInput.NULL_ANALOG_LOCATION_INPUT;
        if (playerInputId < this.list!.size()) {
            analogLocationInput = changetype<AnalogLocationInput | null>(this.list!.get(playerInputId)); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (analogLocationInput == AnalogLocationInput.NULL_ANALOG_LOCATION_INPUT) {
            analogLocationInput = new AnalogLocationInput().jinit_AnalogLocationInput_1(playerInputId); if (JThrowable.pending !== null) return;
            this.list!.add(analogLocationInput); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getInstanceForPlayer(playerInputId: i32): AnalogLocationInput | null {
        return changetype<AnalogLocationInput | null>(this.list!.get(playerInputId));
    }
    

    getList(): BasicArrayList | null {
        return this.list;
    }
}


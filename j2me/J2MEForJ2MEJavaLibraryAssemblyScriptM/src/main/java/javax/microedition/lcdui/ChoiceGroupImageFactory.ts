/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// package javax.microedition.lcdui
// import org.allbinary.MIDPUtil

@global export class ChoiceGroupImageFactory extends JObject {

    jclassName(): string {
        return "javax.microedition.lcdui.ChoiceGroupImageFactory";
    }
    @lazy static jv_instance: ChoiceGroupImageFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ChoiceGroupImageFactory | null {
        if (!ChoiceGroupImageFactory.js_instance) {
            ChoiceGroupImageFactory.js_instance = true;
            ChoiceGroupImageFactory.jv_instance = new ChoiceGroupImageFactory().jinit_ChoiceGroupImageFactory_0();
        }
        return ChoiceGroupImageFactory.jv_instance;
    }
    static set instance(value: ChoiceGroupImageFactory | null) {
        ChoiceGroupImageFactory.js_instance = true;
        ChoiceGroupImageFactory.jv_instance = value;
    }
    multiOff: StaticArray<i8> | null = null;
    multiOn: StaticArray<i8> | null = null;
    radioOff: StaticArray<i8> | null = null;
    radioOn: StaticArray<i8> | null = null;
    midpUtil: MIDPUtil | null = null;
    imgMultiOffO: Image | null = null;
    imgMultiOnO: Image | null = null;
    imgRadioOffO: Image | null = null;
    imgRadioOnO: Image | null = null;
    imgMultiOff: Image | null = null;
    imgMultiOn: Image | null = null;
    imgRadioOff: Image | null = null;
    imgRadioOn: Image | null = null;
    imageArray: StaticArray<Image | null> | null = null;

    jfields_ChoiceGroupImageFactory(): void {
    this.multiOff = StaticArray.fromArray<i8>([(<i8>(-119)), 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 10, 0, 0, 0, 11, 2, 3, 0, 0, 0, 59, 0, (<i8>(-12)), (<i8>(-117)), 0, 0, 0, 6, 80, 76, 84, 69, (<i8>(-1)), (<i8>(-1)), (<i8>(-1)), (<i8>(-69)), (<i8>(-69)), (<i8>(-69)), (<i8>(-57)), 75, (<i8>(-33)), (<i8>(-8)), 0, 0, 0, 30, 73, 68, 65, 84, 120, (<i8>(-38)), 99, 96, 96, 96, 96, 12, 101, (<i8>(-8)), (<i8>(-51)), (<i8>(-32)), (<i8>(-64)), 32, (<i8>(-64)), (<i8>(-60)), (<i8>(-64)), (<i8>(-64)), (<i8>(-128)), 11, 51, (<i8>(-122)), 50, (<i8>(-4)), 6, 0, 63, 116, 3, 1, 53, (<i8>(-108)), 39, (<i8>(-26)), 0, 0, 0, 0, 73, 69, 78, 68, (<i8>(-82)), 66, 96, (<i8>(-126))]);
    this.multiOn = StaticArray.fromArray<i8>([(<i8>(-119)), 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 10, 0, 0, 0, 11, 2, 3, 0, 0, 0, 59, 0, (<i8>(-12)), (<i8>(-117)), 0, 0, 0, 12, 80, 76, 84, 69, (<i8>(-1)), (<i8>(-1)), (<i8>(-1)), (<i8>(-69)), (<i8>(-69)), (<i8>(-69)), 106, 106, 106, 2, 2, 2, 106, (<i8>(-103)), 14, (<i8>(-47)), 0, 0, 0, 53, 73, 68, 65, 84, 120, (<i8>(-38)), 99, 96, 96, 124, (<i8>(-64)), (<i8>(-16)), (<i8>(-1)), (<i8>(-77)), 3, (<i8>(-45)), 65, (<i8>(-111)), 15, 76, 12, 108, 12, 76, 12, (<i8>(-4)), 12, 76, 12, 18, 12, 76, (<i8>(-68)), 127, 24, (<i8>(-104)), 126, 45, 96, 96, (<i8>(-7)), (<i8>(-11)), (<i8>(-109)), (<i8>(-127)), (<i8>(-23)), (<i8>(-65)), 3, 3, (<i8>(-29)), 127, (<i8>(-122)), (<i8>(-113)), 0, 5, 37, 12, (<i8>(-34)), 1, (<i8>(-99)), (<i8>(-83)), 100, 0, 0, 0, 0, 73, 69, 78, 68, (<i8>(-82)), 66, 96, (<i8>(-126))]);
    this.radioOff = StaticArray.fromArray<i8>([(<i8>(-119)), 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 11, 0, 0, 0, 11, 2, 3, 0, 0, 0, (<i8>(-44)), (<i8>(-62)), (<i8>(-97)), (<i8>(-75)), 0, 0, 0, 9, 80, 76, 84, 69, (<i8>(-1)), (<i8>(-1)), (<i8>(-1)), (<i8>(-69)), (<i8>(-69)), (<i8>(-69)), 106, 106, 106, (<i8>(-44)), 13, (<i8>(-1)), (<i8>(-24)), 0, 0, 0, 42, 73, 68, 65, 84, 120, (<i8>(-38)), 99, 96, 90, (<i8>(-59)), (<i8>(-64)), 32, (<i8>(-63)), 48, (<i8>(-127)), 65, (<i8>(-127)), 65, (<i8>(-127)), 41, (<i8>(-127)), (<i8>(-31)), 5, 19, 3, 3, 3, 50, 102, 80, 96, 80, 96, (<i8>(-6)), (<i8>(-63)), 80, (<i8>(-64)), (<i8>(-64)), (<i8>(-76)), (<i8>(-118)), 1, 0, 113, 24, 5, 61, 73, (<i8>(-68)), (<i8>(-100)), 98, 0, 0, 0, 0, 73, 69, 78, 68, (<i8>(-82)), 66, 96, (<i8>(-126))]);
    this.radioOn = StaticArray.fromArray<i8>([(<i8>(-119)), 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 11, 0, 0, 0, 11, 2, 3, 0, 0, 0, (<i8>(-44)), (<i8>(-62)), (<i8>(-97)), (<i8>(-75)), 0, 0, 0, 12, 80, 76, 84, 69, (<i8>(-1)), (<i8>(-1)), (<i8>(-1)), (<i8>(-69)), (<i8>(-69)), (<i8>(-69)), 106, 106, 106, 2, 2, 2, 106, (<i8>(-103)), 14, (<i8>(-47)), 0, 0, 0, 50, 73, 68, 65, 84, 120, (<i8>(-38)), 5, (<i8>(-63)), 65, 13, 0, 32, 12, 4, (<i8>(-63)), (<i8>(-19)), (<i8>(-11)), (<i8>(-117)), 1, 18, 68, (<i8>(-100)), 10, 52, 19, 94, 72, 64, 17, 101, (<i8>(-122)), 44, (<i8>(-44)), (<i8>(-29)), 98, (<i8>(-52)), 89, 77, (<i8>(-102)), 40, 2, 85, (<i8>(-95)), (<i8>(-73)), (<i8>(-63)), (<i8>(-104)), (<i8>(-63)), 37, (<i8>(-117)), 15, (<i8>(-40)), 119, 10, 41, 78, 26, (<i8>(-79)), 59, 0, 0, 0, 0, 73, 69, 78, 68, (<i8>(-82)), 66, 96, (<i8>(-126))]);
    this.midpUtil = MIDPUtil.getInstance();
    this.imgMultiOffO = this.midpUtil!.createImageFromByteArray(this.multiOff, 0, this.multiOff!.length);
    this.imgMultiOnO = this.midpUtil!.createImageFromByteArray(this.multiOn, 0, this.multiOn!.length);
    this.imgRadioOffO = this.midpUtil!.createImageFromByteArray(this.radioOff, 0, this.radioOff!.length);
    this.imgRadioOnO = this.midpUtil!.createImageFromByteArray(this.radioOn, 0, this.radioOn!.length);
    this.imgMultiOff = this.imgMultiOffO;
    this.imgMultiOn = this.imgMultiOnO;
    this.imgRadioOff = this.imgRadioOffO;
    this.imgRadioOn = this.imgRadioOnO;
    this.imageArray = StaticArray.fromArray<Image | null>([this.imgMultiOff, this.imgMultiOn, this.imgRadioOff, this.imgRadioOn]);
    }

    jinit_ChoiceGroupImageFactory_0(): ChoiceGroupImageFactory {
        super.jinit_JObject_0();
        this.jfields_ChoiceGroupImageFactory();
        return this;
    }
    

    static getInstance(): ChoiceGroupImageFactory | null {
        return ChoiceGroupImageFactory.instance;
    }
    

    getImageArray(): StaticArray<Image | null> | null {
        return this.imageArray;
    }
    

    init(imageArray: StaticArray<Image | null> | null): void {
        this.imgMultiOff = imageArray![0];
        this.imageArray![0] = this.imgMultiOff;
        this.imgMultiOn = imageArray![1];
        this.imageArray![1] = this.imgMultiOn;
        this.imgRadioOff = imageArray![2];
        this.imageArray![2] = this.imgRadioOff;
        this.imgRadioOn = imageArray![3];
        this.imageArray![3] = this.imgRadioOn;
    }
}


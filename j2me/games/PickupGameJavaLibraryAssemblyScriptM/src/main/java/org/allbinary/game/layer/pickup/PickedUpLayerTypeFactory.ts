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
// package org.allbinary.game.layer.pickup
// import org.allbinary.logic.string.StringUtil

@global export class PickedUpLayerTypeFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.layer.pickup.PickedUpLayerTypeFactory";
    }
    @lazy static jv_instance: PickedUpLayerTypeFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): PickedUpLayerTypeFactory | null {
        if (!PickedUpLayerTypeFactory.js_instance) {
            PickedUpLayerTypeFactory.js_instance = true;
            PickedUpLayerTypeFactory.jv_instance = new PickedUpLayerTypeFactory().jinit_PickedUpLayerTypeFactory_0();
        }
        return PickedUpLayerTypeFactory.jv_instance;
    }
    static set instance(value: PickedUpLayerTypeFactory | null) {
        PickedUpLayerTypeFactory.js_instance = true;
        PickedUpLayerTypeFactory.jv_instance = value;
    }
    NONE: PickedUpLayerType | null = null;
    BEAM: PickedUpLayerType | null = null;
    MINE: PickedUpLayerType | null = null;
    PROJECTILE: PickedUpLayerType | null = null;
    ENHANCEMENT: PickedUpLayerType | null = null;
    MORPH: PickedUpLayerType | null = null;
    PART: PickedUpLayerType | null = null;
    HEAL: PickedUpLayerType | null = null;
    LIFE: PickedUpLayerType | null = null;
    POINTS: PickedUpLayerType | null = null;

    jfields_PickedUpLayerTypeFactory(): void {
    this.NONE = new PickedUpLayerType().jinit_PickedUpLayerType_1(StringUtil.getInstance()!.NULL_STRING);
    this.BEAM = new PickedUpLayerType().jinit_PickedUpLayerType_1("BEAM");
    this.MINE = new PickedUpLayerType().jinit_PickedUpLayerType_1("MINE");
    this.PROJECTILE = new PickedUpLayerType().jinit_PickedUpLayerType_1("PROJECTILE");
    this.ENHANCEMENT = new PickedUpLayerType().jinit_PickedUpLayerType_1("Enhancement");
    this.MORPH = new PickedUpLayerType().jinit_PickedUpLayerType_1("Morph");
    this.PART = new PickedUpLayerType().jinit_PickedUpLayerType_1("Part");
    this.HEAL = new PickedUpLayerType().jinit_PickedUpLayerType_1("Heal");
    this.LIFE = new PickedUpLayerType().jinit_PickedUpLayerType_1("Life");
    this.POINTS = new PickedUpLayerType().jinit_PickedUpLayerType_1("Points");
    }

    jinit_PickedUpLayerTypeFactory_0(): PickedUpLayerTypeFactory {
        super.jinit_JObject_0();
        this.jfields_PickedUpLayerTypeFactory();
        return this;
    }
    

    static getInstance(): PickedUpLayerTypeFactory | null {
        return PickedUpLayerTypeFactory.instance;
    }
}


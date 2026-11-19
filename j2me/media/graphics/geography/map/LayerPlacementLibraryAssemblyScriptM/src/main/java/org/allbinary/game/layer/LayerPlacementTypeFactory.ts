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
// package org.allbinary.game.layer
// import org.allbinary.direction.DirectionFactory

@global export class LayerPlacementTypeFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.layer.LayerPlacementTypeFactory";
    }
    @lazy static jv_instance: LayerPlacementTypeFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LayerPlacementTypeFactory | null {
        if (!LayerPlacementTypeFactory.js_instance) {
            LayerPlacementTypeFactory.js_instance = true;
            LayerPlacementTypeFactory.jv_instance = new LayerPlacementTypeFactory().jinit_LayerPlacementTypeFactory_0();
        }
        return LayerPlacementTypeFactory.jv_instance;
    }
    static set instance(value: LayerPlacementTypeFactory | null) {
        LayerPlacementTypeFactory.js_instance = true;
        LayerPlacementTypeFactory.jv_instance = value;
    }
    MAP: LayerPlacementType | null = null;
    LEFT: LayerPlacementType | null = null;
    DOWN: LayerPlacementType | null = null;
    UP: LayerPlacementType | null = null;
    RIGHT: LayerPlacementType | null = null;

    jfields_LayerPlacementTypeFactory(): void {
    this.MAP = new LayerPlacementType().jinit_LayerPlacementType_1(JInteger.MAX_VALUE);
    this.LEFT = new LayerPlacementType().jinit_LayerPlacementType_1(DirectionFactory.getInstance()!.LEFT!.getValue());
    this.DOWN = new LayerPlacementType().jinit_LayerPlacementType_1(DirectionFactory.getInstance()!.DOWN!.getValue());
    this.UP = new LayerPlacementType().jinit_LayerPlacementType_1(DirectionFactory.getInstance()!.UP!.getValue());
    this.RIGHT = new LayerPlacementType().jinit_LayerPlacementType_1(DirectionFactory.getInstance()!.RIGHT!.getValue());
    }

    jinit_LayerPlacementTypeFactory_0(): LayerPlacementTypeFactory {
        super.jinit_JObject_0();
        this.jfields_LayerPlacementTypeFactory();
        return this;
    }
    

    static getInstance(): LayerPlacementTypeFactory | null {
        return LayerPlacementTypeFactory.instance;
    }
}


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
// package org.allbinary.game.ag.layer.weapon.mine
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerFactoryInterface
// import org.allbinary.view.ViewPositionFactoryInterface

@global export class MineLayerFactory extends JObject implements AllBinaryLayerFactoryInterface {

    jclassName(): string {
        return "org.allbinary.game.ag.layer.weapon.mine.MineLayerFactory";
    }
    viewPositionFactoryInterface: ViewPositionFactoryInterface | null = null;

    jfields_MineLayerFactory(): void {
    
    }
    

    jinit_MineLayerFactory_1(viewPositionFactoryInterface: ViewPositionFactoryInterface | null): MineLayerFactory {
        super.jinit_JObject_0();
        this.jfields_MineLayerFactory();
        this.viewPositionFactoryInterface = viewPositionFactoryInterface;
        return this;
    }
    

    getInstance(): AllBinaryLayer | null {
        return new MineLayer().jinit_MineLayer_1(this.viewPositionFactoryInterface!.getInstance());
    }
}


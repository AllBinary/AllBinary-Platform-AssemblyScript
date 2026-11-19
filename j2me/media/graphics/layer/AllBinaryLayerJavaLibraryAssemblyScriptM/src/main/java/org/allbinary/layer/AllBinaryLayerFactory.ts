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
// package org.allbinary.layer
// import org.allbinary.graphics.Rectangle
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.view.ViewPosition

@global export class AllBinaryLayerFactory extends JObject implements AllBinaryLayerFactoryInterface {

    jclassName(): string {
        return "org.allbinary.layer.AllBinaryLayerFactory";
    }
    rectangle: Rectangle | null = null;

    jfields_AllBinaryLayerFactory(): void {
    
    }
    

    jinit_AllBinaryLayerFactory_1(rectangle: Rectangle | null): AllBinaryLayerFactory {
        super.jinit_JObject_0();
        this.jfields_AllBinaryLayerFactory();
        this.rectangle = rectangle;
        return this;
    }
    

    getInstance(): AllBinaryLayer | null {
        return new AllBinaryLayer().jinit_AllBinaryLayer_3(StringUtil.getInstance()!.EMPTY_STRING, this.rectangle, ViewPosition.getInstanceD());
    }
}


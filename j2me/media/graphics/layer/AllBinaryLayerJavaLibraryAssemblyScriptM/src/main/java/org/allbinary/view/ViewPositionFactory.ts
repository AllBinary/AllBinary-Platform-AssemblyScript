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
// package org.allbinary.view

@global export class ViewPositionFactory extends JObject implements ViewPositionFactoryInterface {

    jclassName(): string {
        return "org.allbinary.view.ViewPositionFactory";
    }

    jinit_ViewPositionFactory_0(): ViewPositionFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    getInstance(): ViewPositionBase | null {
        return ViewPosition.getInstanceD();
    }
}


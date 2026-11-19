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
// package org.allbinary.game.init

@global export class BasicBuildGameInitializerFactory extends JObject implements GameInitializationInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.game.init.BasicBuildGameInitializerFactory";
    }
    @lazy static jv_NULL_BASE_BUILD_GMAE_INITIALIZER_FACTORY: BasicBuildGameInitializerFactory | null = null;
    @lazy static js_NULL_BASE_BUILD_GMAE_INITIALIZER_FACTORY: bool = false;
    static get NULL_BASE_BUILD_GMAE_INITIALIZER_FACTORY(): BasicBuildGameInitializerFactory | null {
        if (!BasicBuildGameInitializerFactory.js_NULL_BASE_BUILD_GMAE_INITIALIZER_FACTORY) {
            BasicBuildGameInitializerFactory.js_NULL_BASE_BUILD_GMAE_INITIALIZER_FACTORY = true;
            BasicBuildGameInitializerFactory.jv_NULL_BASE_BUILD_GMAE_INITIALIZER_FACTORY = new BasicBuildGameInitializerFactory().jinit_BasicBuildGameInitializerFactory_0();
        }
        return BasicBuildGameInitializerFactory.jv_NULL_BASE_BUILD_GMAE_INITIALIZER_FACTORY;
    }
    static set NULL_BASE_BUILD_GMAE_INITIALIZER_FACTORY(value: BasicBuildGameInitializerFactory | null) {
        BasicBuildGameInitializerFactory.js_NULL_BASE_BUILD_GMAE_INITIALIZER_FACTORY = true;
        BasicBuildGameInitializerFactory.jv_NULL_BASE_BUILD_GMAE_INITIALIZER_FACTORY = value;
    }

    jinit_BasicBuildGameInitializerFactory_0(): BasicBuildGameInitializerFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    getInstance(): GameInitializationInterface | null {
        return BaseGameInitialization.NULL_BASE_GAME_INITIALIZATION;
    }
}


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
// package org.allbinary.game.health

@global export interface HealthInterface {
    

    isAlive(): bool;
    

    damage(ahealth: i32): void;
    

    heal(ahealth: i32): void;
    

    healMax(): void;
    

    getMaxHealth(): i32;
    

    setMaxHealth(maxHealth: i32): void;
    

    getHealth(): i32;
    

    addListener(healthListenerInterface: HealthListenerInterface | null): void;
}


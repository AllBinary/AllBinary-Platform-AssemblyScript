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
// package org.allbinary.game.combat.destroy
// import org.allbinary.game.layer.CollidableCompositeLayer

@global export class DestroyableSimpleBehavior extends DestroyableBaseBehavior {

    jclassName(): string {
        return "org.allbinary.game.combat.destroy.DestroyableSimpleBehavior";
    }
    ownerLayer: CollidableCompositeLayer | null = null;
    destroyed: bool = false;

    jfields_DestroyableSimpleBehavior(): void {
    
    this.destroyed = false;
    }
    

    jinit_DestroyableSimpleBehavior_1(ownerLayer: CollidableCompositeLayer | null): DestroyableSimpleBehavior {
        super.jinit_DestroyableBaseBehavior_0();
        this.jfields_DestroyableSimpleBehavior();
        this.ownerLayer = ownerLayer;
        return this;
    }
    

    isDestroyed(): bool {
        return this.destroyed;
    }
    

    setDestroyed(destroyed: bool): void {
        this.destroyed = destroyed;
        if (this.isDestroyed()) {
            DestroyedLayerProcessor.getInstance()!.add(this.ownerLayer); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}


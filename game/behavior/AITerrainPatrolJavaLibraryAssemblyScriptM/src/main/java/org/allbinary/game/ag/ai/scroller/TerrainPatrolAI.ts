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
// package org.allbinary.game.ag.ai.scroller
// import org.allbinary.game.input.GameInput
// import org.allbinary.game.terrain.BasicTerrainInfo
// import org.allbinary.game.terrain.TerrainEvent
// import org.allbinary.game.terrain.TerrainEventCircularStaticPool
// import org.allbinary.game.terrain.TerrainEventHandler
// import org.allbinary.game.terrain.TerrainEventListener
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.math.Angle
// import org.allbinary.math.AngleFactory
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.BasicArrayList

@global export class TerrainPatrolAI extends PacePatrolAI {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.scroller.TerrainPatrolAI";
    }
    terrainEventListener: TerrainEventListener | null = null;
    DOWN: Angle | null = null;
    CLIFF: BasicTerrainInfo | null = null;

    jfields_TerrainPatrolAI(): void {
    this.terrainEventListener = new TerrainEventListener().jinit_TerrainEventListener_0();
    this.DOWN = AngleFactory.getInstance()!.DOWN;
    this.CLIFF = new BasicTerrainInfo().jinit_BasicTerrainInfo_1(this.DOWN);
    }
    

    jinit_TerrainPatrolAI_3(hashtable: ABHashtable | null, ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): TerrainPatrolAI {
        super.jinit_PacePatrolAI_3(hashtable, ownerLayerInterface, gameInput);
        this.jfields_TerrainPatrolAI();
        TerrainEventHandler.getInstance1(ownerLayerInterface)!.addListener(this.terrainEventListener); if (JThrowable.pending !== null) return this;
        this.terrainEventListener!.onTerrainEvent(TerrainEventCircularStaticPool.getInstance()!.getNext(this.CLIFF)); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    update(): void {
        super.update(); if (JThrowable.pending !== null) return;
        this.changeDirectionIfCliffReached(); if (JThrowable.pending !== null) return;
    }
    

    changeDirectionIfCliffReached(): void {
        let list: BasicArrayList | null = this.terrainEventListener!.getList(); if (JThrowable.pending !== null) return;
        let size: i32 = list!.size(); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < size; index++) {
            let terrainEvent: TerrainEvent | null = changetype<TerrainEvent | null>(list!.removeAt(index)); if (JThrowable.pending !== null) return;
            let basicTerrainInfo: BasicTerrainInfo | null = terrainEvent!.getBasicTerrainInfo(); if (JThrowable.pending !== null) return;
            let angle: Angle | null = basicTerrainInfo!.getAngle(); if (JThrowable.pending !== null) return;
            if (angle == this.DOWN) {
                this.nextDirection(); if (JThrowable.pending !== null) return;
                if (!this.isFollowLimitedByTerrain) {
                    this.logUtil!.putF("Following Limited", this, "onTerrainEvent"); if (JThrowable.pending !== null) return;
                    this.isFollowLimitedByTerrain = true;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}


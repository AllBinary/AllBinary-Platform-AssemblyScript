// Generated Code Do Not Modify
// package org.allbinary.game.terrain
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class TerrainEventListener extends JObject implements TerrainEventListenerInterface {

    jclassName(): string {
        return "org.allbinary.game.terrain.TerrainEventListener";
    }
    list: BasicArrayList | null = null;

    jfields_TerrainEventListener(): void {
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    }

    jinit_TerrainEventListener_0(): TerrainEventListener {
        super.jinit_JObject_0();
        this.jfields_TerrainEventListener();
        return this;
    }
    

    onEvent(eventObject: AllBinaryEventObject | null): void {
        ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this); if (JThrowable.pending !== null) return;
    }
    

    onTerrainEvent(terrainEvent: TerrainEvent | null): void {
        this.list!.clear(); if (JThrowable.pending !== null) return;
        this.list!.add(terrainEvent); if (JThrowable.pending !== null) return;
    }
    

    getList(): BasicArrayList | null {
        return this.list;
    }
}


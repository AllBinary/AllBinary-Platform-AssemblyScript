// Generated Code Do Not Modify
// package org.allbinary.layer
// import javax.microedition.lcdui.Graphics
// import org.allbinary.TsUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.thread.SynchObject
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.logic.ABSystemWrapper

@global export class LayerManager extends JObject {

    jclassName(): string {
        return "org.allbinary.layer.LayerManager";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    systemWrapper: ABSystemWrapper | null = null;
    tsUtil: TsUtil | null = null;
    layerManagerLogging: LayerManagerLoggingBase | null = null;
    list: BasicArrayList | null = null;
    anyType: SynchObject | null = null;

    jfields_LayerManager(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.systemWrapper = ABSystemWrapper.getInstance();
    this.tsUtil = TsUtil.getInstance();
    
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.anyType = new SynchObject().jinit_SynchObject_0();
    }
    

    jinit_LayerManager_1(layerManagerLogging: LayerManagerLoggingBase | null): LayerManager {
        super.jinit_JObject_0();
        this.jfields_LayerManager();
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
        this.layerManagerLogging = layerManagerLogging;
        return this;
    }
    

    contains(layerInterface: AllBinaryLayer | null): bool {
        return this.list!.contains(layerInterface);
    }
    

    update(layerInterface: AllBinaryLayer | null): void {
        let had: bool = this.list!.remove(layerInterface); if (JThrowable.pending !== null) return;
        if (had) {
            let nextLayerInterface: AllBinaryLayer | null = null;
            let size: i32 = this.list!.size(); if (JThrowable.pending !== null) return;
            for (let index: i32 = 0; index < size; index++) {
                nextLayerInterface = changetype<AllBinaryLayer | null>(this.list!.get(index)); if (JThrowable.pending !== null) return;
                if (layerInterface!.getZP() > nextLayerInterface!.getZP()) {
                    this.list!.addAt(index, layerInterface); if (JThrowable.pending !== null) return;
                    return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            this.list!.add(layerInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    insert(layerInterface: AllBinaryLayer | null): void {
        let nextLayerInterface: AllBinaryLayer | null = null;
        let size: i32 = this.list!.size(); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < size; index++) {
            nextLayerInterface = changetype<AllBinaryLayer | null>(this.list!.get(index)); if (JThrowable.pending !== null) return;
            if (layerInterface!.getZP() > nextLayerInterface!.getZP()) {
                this.appendAt(layerInterface, index); if (JThrowable.pending !== null) return;
                return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.append(layerInterface); if (JThrowable.pending !== null) return;
    }
    

    append(layerInterface: AllBinaryLayer | null): void {
        this.layerManagerLogging!.append(layerInterface); if (JThrowable.pending !== null) return;
        this.list!.add(layerInterface); if (JThrowable.pending !== null) return;
    }
    

    appendAt(layerInterface: AllBinaryLayer | null, index: i32): void {
        this.layerManagerLogging!.appendAt(layerInterface, index); if (JThrowable.pending !== null) return;
        this.list!.addAt(index, layerInterface); if (JThrowable.pending !== null) return;
    }
    

    remove(layerInterface: AllBinaryLayer | null): void {
        {
            this.layerManagerLogging!.remove(layerInterface); if (JThrowable.pending !== null) return;
            let result: bool = this.list!.remove(layerInterface); if (JThrowable.pending !== null) return;
            this.layerManagerLogging!.removeResult(this, layerInterface, result); if (JThrowable.pending !== null) return;
        }
    }
    

    getLayerAt(index: i32): Layer | null {
        return changetype<Layer | null>(this.list!.objectArray![index]);
    }
    

    getSize(): i32 {
        return this.list!.size();
    }
    

    cleanup(): void {
        {
            this.list!.clear(); if (JThrowable.pending !== null) return;
            this.layerManagerLogging!.clear(); if (JThrowable.pending !== null) return;
            this.tsUtil!.gc(); if (JThrowable.pending !== null) return;
            this.tsUtil!.gc(); if (JThrowable.pending !== null) return;
        }
    }
    

    paint(g: Graphics | null, x: i32, y: i32): void {
        {
            let comp: Layer | null = null;
            for (let index: i32 = this.list!.size(); --index >= 0; ) {
                comp = changetype<Layer | null>(this.list!.objectArray![index]);
                if (comp != null && comp!.isVisible()) {
                    comp!.paint(g); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        }
    }
}


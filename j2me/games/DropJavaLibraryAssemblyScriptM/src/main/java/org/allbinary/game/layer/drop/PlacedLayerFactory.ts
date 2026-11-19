// Generated Code Do Not Modify
// package org.allbinary.game.layer.drop
// import org.allbinary.layer.AllBinaryLayerFactoryInterface
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.util.BasicArrayListUtil

@global export class PlacedLayerFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.layer.drop.PlacedLayerFactory";
    }
    @lazy static jv_instance: PlacedLayerFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): PlacedLayerFactory | null {
        if (!PlacedLayerFactory.js_instance) {
            PlacedLayerFactory.js_instance = true;
            PlacedLayerFactory.jv_instance = new PlacedLayerFactory().jinit_PlacedLayerFactory_0();
        }
        return PlacedLayerFactory.jv_instance;
    }
    static set instance(value: PlacedLayerFactory | null) {
        PlacedLayerFactory.js_instance = true;
        PlacedLayerFactory.jv_instance = value;
    }
    list: BasicArrayList | null = null;
    basicArrayListUtil: BasicArrayListUtil | null = null;

    jfields_PlacedLayerFactory(): void {
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.basicArrayListUtil = BasicArrayListUtil.getInstance();
    }
    

    jinit_PlacedLayerFactory_0(): PlacedLayerFactory {
        super.jinit_JObject_0();
        this.jfields_PlacedLayerFactory();
        return this;
    }
    

    clear(): void {
        this.list!.clear(); if (JThrowable.pending !== null) return;
    }
    

    static getInstance(): PlacedLayerFactory | null {
        return PlacedLayerFactory.instance;
    }
    

    getSize(): i32 {
        return this.list!.size();
    }
    

    getRandomInstance(): AllBinaryLayerFactoryInterface | null {
        return changetype<AllBinaryLayerFactoryInterface | null>(this.basicArrayListUtil!.getRandom(this.list));
    }
    

    add(layerInterfaceFactoryInterface: AllBinaryLayerFactoryInterface | null): void {
        this.list!.add(layerInterfaceFactoryInterface); if (JThrowable.pending !== null) return;
    }
}


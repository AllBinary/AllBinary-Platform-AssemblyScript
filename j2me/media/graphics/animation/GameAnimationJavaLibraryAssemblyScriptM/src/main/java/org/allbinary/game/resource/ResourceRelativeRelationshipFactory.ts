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
// package org.allbinary.game.resource
// import org.allbinary.graphics.RelativeRelationship
// import org.allbinary.logic.StdUtil
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.util.BasicArrayListUtil

@global export class ResourceRelativeRelationshipFactory extends JObject implements ResourceRelativeRelationshipFactoryInterface {

    jclassName(): string {
        return "org.allbinary.game.resource.ResourceRelativeRelationshipFactory";
    }
    basicArrayListUtil: BasicArrayListUtil | null = null;
    hashtable: ABHashtable | null = null;
    initialized: bool = false;

    jfields_ResourceRelativeRelationshipFactory(): void {
    this.basicArrayListUtil = BasicArrayListUtil.getInstance();
    this.hashtable = StdUtil.getInstance()!.createHashtable();
    this.initialized = false;
    }

    jinit_ResourceRelativeRelationshipFactory_0(): ResourceRelativeRelationshipFactory {
        super.jinit_JObject_0();
        this.jfields_ResourceRelativeRelationshipFactory();
        return this;
    }
    

    init(level: i32): void {
        this.setInitialized(true); if (JThrowable.pending !== null) return;
    }
    

    getResourceRelativeRelationshipList(resource: string | null): BasicArrayList | null {
        let listCanBeNull: Object | null = this.hashtable!.get(resource); if (JThrowable.pending !== null) return null;
        if (listCanBeNull == null) {
            return this.basicArrayListUtil!.getImmutableInstance();
        } if (JThrowable.pending !== null) return null;
        return changetype<BasicArrayList | null>(listCanBeNull);
    }
    

    addResourceRelativeRelationship(resource: string | null, hardPoint: RelativeRelationship | null): void {
        let list: BasicArrayList | null = this.getResourceRelativeRelationshipList(resource); if (JThrowable.pending !== null) return;
        if (list == this.basicArrayListUtil!.getImmutableInstance()) {
            list = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        list!.add(hardPoint); if (JThrowable.pending !== null) return;
        this.hashtable!.put(resource, list); if (JThrowable.pending !== null) return;
    }
    

    isLoadingLevel(level: i32): bool {
        return false;
    }
    

    isFeature(): bool {
        return false;
    }
    

    setInitialized(initialized: bool): void {
        this.initialized = initialized;
    }
    

    isInitialized(): bool {
        return this.initialized;
    }
}


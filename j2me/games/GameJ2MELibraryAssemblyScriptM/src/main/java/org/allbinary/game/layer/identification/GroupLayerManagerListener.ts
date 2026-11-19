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
// package org.allbinary.game.layer.identification
// import org.allbinary.game.identification.Group
// import org.allbinary.game.identification.GroupInterfaceCompositeInterface
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.event.LayerManagerEvent
// import org.allbinary.layer.event.LayerManagerEventHandler
// import org.allbinary.layer.event.LayerManagerEventListener
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventStrings
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonSeps
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class GroupLayerManagerListener extends LayerManagerEventListener {

    jclassName(): string {
        return "org.allbinary.game.layer.identification.GroupLayerManagerListener";
    }
    @lazy static jv_SINGLETON: GroupLayerManagerListener | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): GroupLayerManagerListener | null {
        if (!GroupLayerManagerListener.js_SINGLETON) {
            GroupLayerManagerListener.js_SINGLETON = true;
            GroupLayerManagerListener.jv_SINGLETON = new GroupLayerManagerListener().jinit_GroupLayerManagerListener_0();
        }
        return GroupLayerManagerListener.jv_SINGLETON;
    }
    static set SINGLETON(value: GroupLayerManagerListener | null) {
        GroupLayerManagerListener.js_SINGLETON = true;
        GroupLayerManagerListener.jv_SINGLETON = value;
    }
    logUtil: LogUtil | null = null;
    list: BasicArrayList | null = null;

    jfields_GroupLayerManagerListener(): void {
    this.logUtil = LogUtil.getInstance();
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    }
    

    static getInstance(): GroupLayerManagerListener | null {
        return GroupLayerManagerListener.SINGLETON;
    }
    

    jinit_GroupLayerManagerListener_0(): GroupLayerManagerListener {
        super.jinit_LayerManagerEventListener_0();
        this.jfields_GroupLayerManagerListener();
        LayerManagerEventHandler.getInstance()!.addListener(this); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    clear(): void {
        let groupList: BasicArrayList | null = null;
        let size: i32 = this.list!.size(); if (JThrowable.pending !== null) return;
        for (let index: i32 = size - 1; index >= 0; index--) {
            groupList = changetype<BasicArrayList | null>(this.list!.objectArray![index]);
            groupList!.clear(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getGroupSizeFromInterface(groupInterfaceCompositeInterface: GroupInterfaceCompositeInterface | null): i32 {
        let groupInterfaceArray: StaticArray<Group | null> | null = groupInterfaceCompositeInterface!.getGroupInterface(); if (JThrowable.pending !== null) return 0;
        return this.getGroupSize(groupInterfaceArray![0]);
    }
    

    getGroupSize(groupInterface: Group | null): i32 {
        let id: i32 = (<i32>(groupInterface!.getGroupId())); if (JThrowable.pending !== null) return 0;
        return this.getGroupSizeById(id);
    }
    

    getList(groupInterface: Group | null): BasicArrayList | null {
        let id: i32 = (<i32>(groupInterface!.getGroupId())); if (JThrowable.pending !== null) return null;
        return this.getListById(id);
    }
    

    getListById(groupId: i32): BasicArrayList | null {
        let groupList: BasicArrayList | null = changetype<BasicArrayList | null>(this.list!.objectArray![groupId]);
        return groupList;
    }
    

    getGroupSizeById(groupId: i32): i32 {
        let groupList: BasicArrayList | null = changetype<BasicArrayList | null>(this.list!.objectArray![groupId]);
        let size: i32 = groupList!.size(); if (JThrowable.pending !== null) return 0;
        return size;
    }
    

    areAllOtherGroupsEmpty(groupInterface: Group | null): bool {
        let id: i32 = (<i32>(groupInterface!.getGroupId())); if (JThrowable.pending !== null) return false;
        let size: i32 = this.list!.size(); if (JThrowable.pending !== null) return false;
        for (let index: i32 = size - 1; index >= 0; index--) {
            if (id != index) {
                let groupSize: i32 = this.getGroupSizeById(index); if (JThrowable.pending !== null) return false;
                if (groupSize != 0) {
                    this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Group Size: ")!.appendint(groupSize)), this, "areAllOtherGroupsEmpty"); if (JThrowable.pending !== null) return false;
                    return false;
                } if (JThrowable.pending !== null) return false;
            } if (JThrowable.pending !== null) return false;
        } if (JThrowable.pending !== null) return false;
        return true;
    }
    

    isIdInList(id: i32, excludeGroupList: BasicArrayList | null): bool {
        let size: i32 = excludeGroupList!.size(); if (JThrowable.pending !== null) return false;
        let groupInterfaceArray: StaticArray<Group | null> | null = null;
        let groupInterface: Group | null = null;
        let groupId: i32 = 0;
        for (let index: i32 = size - 1; index >= 0; index--) {
            groupInterfaceArray = changetype<StaticArray<Group | null> | null>(excludeGroupList!.objectArray![index]);
            let size2: i32 = groupInterfaceArray!.length;
            for (let index2: i32 = 0; index2 < size2; index2++) {
                groupInterface = groupInterfaceArray![index2];
                groupId = (<i32>(groupInterface!.getGroupId())); if (JThrowable.pending !== null) return false;
                if (groupId == id) {
                    return true;
                }
            } if (JThrowable.pending !== null) return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    areAllOtherGroupsLessThan(excludeGroupList: BasicArrayList | null, maxSize: i32): bool {
        let size: i32 = this.list!.size(); if (JThrowable.pending !== null) return false;
        for (let index: i32 = size - 1; index >= 0; index--) {
            if (!this.isIdInList(index, excludeGroupList)) {
                let groupSize: i32 = this.getGroupSizeById(index); if (JThrowable.pending !== null) return false;
                if (groupSize >= maxSize) {
                    return false;
                }
            } if (JThrowable.pending !== null) return false;
        } if (JThrowable.pending !== null) return false;
        return true;
    }
    

    init(total: i32): void {
        while (this.list!.size() <= total + 1) {
            this.list!.add(new BasicArrayListD().jinit_BasicArrayListD_0()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    onEvent(eventObject: AllBinaryEventObject | null): void {
        ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this); if (JThrowable.pending !== null) return;
    }
    

    onCreateLayerManagerEvent(layerManagerEvent: LayerManagerEvent | null): void {
        let layerInterface: AllBinaryLayer | null = layerManagerEvent!.getLayerInterface(); if (JThrowable.pending !== null) return;
        let groupInterfaceArray: StaticArray<Group | null> | null = layerInterface!.getGroupInterface(); if (JThrowable.pending !== null) return;
        let size: i32 = groupInterfaceArray!.length;
        let id: i32 = 0;
        let groupList: BasicArrayList | null = null;
        for (let index: i32 = 0; index < size; index++) {
            id = (<i32>(groupInterfaceArray![index]!.getGroupId())); if (JThrowable.pending !== null) return;
            groupList = changetype<BasicArrayList | null>(this.list!.objectArray![id]);
            if (groupList == null) {
                this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("id: ")!.appendint(id)), this, "onCreateLayerManagerEvent"); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            if (!groupList!.contains(layerInterface)) {
                groupList!.add(layerInterface); if (JThrowable.pending !== null) return;
            } else {
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    onDeleteLayerManagerEvent(layerManagerEvent: LayerManagerEvent | null): void {
        let layerInterface: AllBinaryLayer | null = layerManagerEvent!.getLayerInterface(); if (JThrowable.pending !== null) return;
        let groupInterfaceArray: StaticArray<Group | null> | null = layerInterface!.getGroupInterface(); if (JThrowable.pending !== null) return;
        let size: i32 = groupInterfaceArray!.length;
        let id: i32 = 0;
        let groupList: BasicArrayList | null = null;
        for (let index: i32 = 0; index < size; index++) {
            id = (<i32>(groupInterfaceArray![index]!.getGroupId())); if (JThrowable.pending !== null) return;
            groupList = changetype<BasicArrayList | null>(this.list!.objectArray![id]);
            groupList!.remove(layerInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    log(): void {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        let GROUP: string | null = "Group: ";
        let SPACE: string | null = CommonSeps.getInstance()!.SPACE; if (JThrowable.pending !== null) return;
        let TOTAL_LABEL: string | null = CommonLabels.getInstance()!.TOTAL_LABEL; if (JThrowable.pending !== null) return;
        let size: i32 = this.list!.size(); if (JThrowable.pending !== null) return;
        for (let index: i32 = size - 1; index >= 0; index--) {
            let groupList: BasicArrayList | null = changetype<BasicArrayList | null>(this.list!.objectArray![index]);
            stringBuffer!.append(GROUP); if (JThrowable.pending !== null) return;
            stringBuffer!.appendint(index); if (JThrowable.pending !== null) return;
            stringBuffer!.append(SPACE); if (JThrowable.pending !== null) return;
            stringBuffer!.append(TOTAL_LABEL); if (JThrowable.pending !== null) return;
            stringBuffer!.appendint(groupList!.size()); if (JThrowable.pending !== null) return;
            stringBuffer!.append(SPACE); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(stringBuffer), this, "log"); if (JThrowable.pending !== null) return;
    }
}


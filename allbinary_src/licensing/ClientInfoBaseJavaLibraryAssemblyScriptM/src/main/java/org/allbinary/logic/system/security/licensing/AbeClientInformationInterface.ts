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
// package org.allbinary.logic.system.security.licensing
// import org.allbinary.logic.system.os.GenericOperatingSystem
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.BasicArrayList

@global export interface AbeClientInformationInterface {
    

    init(): void;
    

    getOperatingSystemInterface(): GenericOperatingSystem | null;
    

    getName(): string | null;
    

    getSpecialName(): string | null;
    

    getVersion(): string | null;
    

    getLicenseId(): string | null;
    

    getLicenseServers(): BasicArrayList | null;
    

    getLicenseServer(index: i32): string | null;
    

    getNumberOfLicenseServers(): i32;
    

    toHashtable(): ABHashtable | null;
    

    isSameId(alicenseId: string | null): bool;
    

    isLargerOrDifferentServerList(vector: BasicArrayList | null): bool;
    

    isHardSale(): bool;
    

    toShortString(): string | null;
}


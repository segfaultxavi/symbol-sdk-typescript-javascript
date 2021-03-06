/*
 * Copyright 2020 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Observable } from 'rxjs';
import { HashLockRoutesApi, HashLockInfoDTO } from 'symbol-openapi-typescript-fetch-client';
import { Address } from '../model/account/Address';
import { MosaicId } from '../model/mosaic/MosaicId';
import { UInt64 } from '../model/UInt64';
import { Http } from './Http';
import { DtoMapping } from '../core/utils/DtoMapping';
import { Page } from './Page';
import { HashLockRepository } from './HashLockRepository';
import { HashLockInfo } from '../model/lock/HashLockInfo';
import { HashLockSearchCriteria } from './searchCriteria/HashLockSearchCriteria';

/**
 * Hashlock http repository.
 *
 * @since 1.0
 */
export class HashLockHttp extends Http implements HashLockRepository {
    /**
     * @internal
     * Symbol openapi typescript-node client account routes api
     */
    private hashLockRoutesApi: HashLockRoutesApi;

    /**
     * Constructor
     * @param url Base catapult-rest url
     * @param fetchApi fetch function to be used when performing rest requests.
     */
    constructor(url: string, fetchApi?: any) {
        super(url, fetchApi);
        this.hashLockRoutesApi = new HashLockRoutesApi(this.config());
    }

    /**
     * Get hash lock info for an account.
     * @param hash Hashlock hash
     * @returns Observable<HashLockInfo>
     */
    public getHashLock(hash: string): Observable<HashLockInfo> {
        return this.call(this.hashLockRoutesApi.getHashLock(hash), (body) => this.toHashLockInfo(body));
    }

    /**
     * Gets an array of HashLockInfo.
     * @param criteria - HashLock search criteria
     * @returns Observable<Page<HashLockInfo>>
     */
    public search(criteria: HashLockSearchCriteria): Observable<Page<HashLockInfo>> {
        return this.call(
            this.hashLockRoutesApi.searchHashLock(
                criteria.address.plain(),
                criteria.pageSize,
                criteria.pageNumber,
                criteria.offset,
                DtoMapping.mapEnum(criteria.order),
            ),
            (body) => super.toPage(body.pagination, body.data, this.toHashLockInfo),
        );
    }

    /**
     * This method maps a HashLockInfoDTO from rest to the SDK's HashLockInfo model object.
     *
     * @internal
     * @param {HashLockInfoDTO} dto HashLockInfoDTO the dto object from rest.
     * @returns HashLockInfo model
     */
    private toHashLockInfo(dto: HashLockInfoDTO): HashLockInfo {
        return new HashLockInfo(
            dto.id,
            Address.createFromEncoded(dto.lock.ownerAddress),
            new MosaicId(dto.lock.mosaicId),
            UInt64.fromNumericString(dto.lock.amount),
            UInt64.fromNumericString(dto.lock.endHeight),
            dto.lock.status,
            dto.lock.hash,
        );
    }
}

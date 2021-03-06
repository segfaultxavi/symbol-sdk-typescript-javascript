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

import { expect } from 'chai';
import { Order } from '../../src/infrastructure/searchCriteria/Order';
import { SearchCriteria } from '../../src/infrastructure/searchCriteria/SearchCriteria';

describe('SearchCriteria', () => {
    it('should create SearchCriteria', () => {
        let criteria: SearchCriteria = {};

        expect(criteria.order).to.be.undefined;
        expect(criteria.pageNumber).to.be.undefined;
        expect(criteria.pageSize).to.be.undefined;

        criteria = { order: Order.Asc, pageNumber: 2, pageSize: 2 };

        expect(criteria.order?.valueOf()).to.be.equal('asc');
        expect(criteria.pageNumber).to.be.equal(2);
        expect(criteria.pageSize).to.be.equal(2);
    });
});

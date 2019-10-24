import {Subject} from 'rxjs'

const subject = new Subject();

export const counterService = {
    increase: value => subject.next({ value: value }),
    decrease: value => subject.next({ value: value }),
    getCount: () => subject.asObservable()
}
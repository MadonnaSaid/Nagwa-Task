import { createStore, createTypedHooks } from 'easy-peasy';
import storeModel, { IStoreModel } from '.';

const store = createStore(storeModel);

const typedHooks = createTypedHooks<IStoreModel>();

export const { useStoreActions } = typedHooks;
export const { useStoreState } = typedHooks;
export const { useStore } = typedHooks;
export const { useStoreDispatch } = typedHooks;

export default store;
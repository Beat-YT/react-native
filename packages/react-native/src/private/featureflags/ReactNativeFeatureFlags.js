/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<c43dd1db78ac69ca3c39577d45a04071>>
 * @flow strict-local
 */

/**
 * IMPORTANT: Do NOT modify this file directly.
 *
 * To change the definition of the flags, edit
 *   packages/react-native/scripts/featureflags/ReactNativeFeatureFlags.json.
 *
 * To regenerate this code, run the following script from the repo root:
 *   yarn featureflags-update
 */

import {
  type Getter,
  createJavaScriptFlagGetter,
  createNativeFlagGetter,
  setOverrides,
} from './ReactNativeFeatureFlagsBase';

export type ReactNativeFeatureFlagsJsOnly = {
  jsOnlyTestFlag: Getter<boolean>,
  isLayoutAnimationEnabled: Getter<boolean>,
  animatedShouldDebounceQueueFlush: Getter<boolean>,
  animatedShouldUseSingleOp: Getter<boolean>,
  enableAccessToHostTreeInFabric: Getter<boolean>,
  shouldUseAnimatedObjectForTransform: Getter<boolean>,
  shouldUseSetNativePropsInFabric: Getter<boolean>,
};

export type ReactNativeFeatureFlagsJsOnlyOverrides = Partial<ReactNativeFeatureFlagsJsOnly>;

export type ReactNativeFeatureFlags = {
  ...ReactNativeFeatureFlagsJsOnly,
  commonTestFlag: Getter<boolean>,
  useModernRuntimeScheduler: Getter<boolean>,
  enableMicrotasks: Getter<boolean>,
  batchRenderingUpdatesInEventLoop: Getter<boolean>,
  enableSpannableBuildingUnification: Getter<boolean>,
  enableCustomDrawOrderFabric: Getter<boolean>,
}

/**
 * JS-only flag for testing. Do NOT modify.
 */
export const jsOnlyTestFlag: Getter<boolean> = createJavaScriptFlagGetter('jsOnlyTestFlag', false);

/**
 * Function used to enable / disabled Layout Animations in React Native.
 */
export const isLayoutAnimationEnabled: Getter<boolean> = createJavaScriptFlagGetter('isLayoutAnimationEnabled', true);

/**
 * Enables an experimental flush-queue debouncing in Animated.js.
 */
export const animatedShouldDebounceQueueFlush: Getter<boolean> = createJavaScriptFlagGetter('animatedShouldDebounceQueueFlush', false);

/**
 * Enables an experimental mega-operation for Animated.js that replaces many calls to native with a single call into native, to reduce JSI/JNI traffic.
 */
export const animatedShouldUseSingleOp: Getter<boolean> = createJavaScriptFlagGetter('animatedShouldUseSingleOp', false);

/**
 * Enables access to the host tree in Fabric using DOM-compatible APIs.
 */
export const enableAccessToHostTreeInFabric: Getter<boolean> = createJavaScriptFlagGetter('enableAccessToHostTreeInFabric', false);

/**
 * Enables use of AnimatedObject for animating transform values.
 */
export const shouldUseAnimatedObjectForTransform: Getter<boolean> = createJavaScriptFlagGetter('shouldUseAnimatedObjectForTransform', false);

/**
 * Enables use of setNativeProps in JS driven animations.
 */
export const shouldUseSetNativePropsInFabric: Getter<boolean> = createJavaScriptFlagGetter('shouldUseSetNativePropsInFabric', true);

/**
 * Common flag for testing. Do NOT modify.
 */
export const commonTestFlag: Getter<boolean> = createNativeFlagGetter('commonTestFlag', false);
/**
 * When enabled, it uses the modern fork of RuntimeScheduler that allows scheduling tasks with priorities from any thread.
 */
export const useModernRuntimeScheduler: Getter<boolean> = createNativeFlagGetter('useModernRuntimeScheduler', false);
/**
 * Enables the use of microtasks in Hermes (scheduling) and RuntimeScheduler (execution).
 */
export const enableMicrotasks: Getter<boolean> = createNativeFlagGetter('enableMicrotasks', false);
/**
 * When enabled, the RuntimeScheduler processing the event loop will batch all rendering updates and dispatch them together at the end of each iteration of the loop.
 */
export const batchRenderingUpdatesInEventLoop: Getter<boolean> = createNativeFlagGetter('batchRenderingUpdatesInEventLoop', false);
/**
 * Uses new, deduplicated logic for constructing Android Spannables from text fragments
 */
export const enableSpannableBuildingUnification: Getter<boolean> = createNativeFlagGetter('enableSpannableBuildingUnification', false);
/**
 * When enabled, Fabric will use customDrawOrder in ReactViewGroup (similar to old architecture).
 */
export const enableCustomDrawOrderFabric: Getter<boolean> = createNativeFlagGetter('enableCustomDrawOrderFabric', false);

/**
 * Overrides the feature flags with the provided methods.
 * NOTE: Only JS-only flags can be overridden from JavaScript using this API.
 */
export const override = setOverrides;

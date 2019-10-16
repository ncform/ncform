
<a name="1.6.0"></a>
# [1.6.0](https://github.com/ncform/ncform/compare/v1.5.0...v1.6.0) (2019-10-16)

### Bug Fixes

* **ncform-theme-elementui:** fixed bug that dropdown options do not show any more with configure filterLocal=false ([498ef06](https://github.com/ncform/ncform/commit/498ef06)), closes [#98](https://github.com/ncform/ncform/issues/98)


### Features

* **array layout widgets:** add delExceptionRows config for all layout widgets ([49bdbbf](https://github.com/ncform/ncform/commit/49bdbbf)), closes [#100](https://github.com/ncform/ncform/issues/100)
* **array-table:** add column config (colgroup) for array-table widget ([aad46c4](https://github.com/ncform/ncform/commit/aad46c4)), closes [#99](https://github.com/ncform/ncform/issues/99)

<a name="1.5.0"></a>
# [1.5.0](https://github.com/ncform/ncform/compare/v1.4.0...v1.5.0) (2019-10-11)

### Features

* **ncform-theme-elementui:** add the switch widget to the standard components ([1180196](https://github.com/ncform/ncform/commit/1180196)), closes [#73](https://github.com/ncform/ncform/issues/73)
* **ncform-theme-elementui:** upload and input.upload add headers config ([16c0511](https://github.com/ncform/ncform/commit/16c0511)), closes [#93](https://github.com/ncform/ncform/issues/93)


<a name="1.4.0"></a>
# [1.4.0](https://github.com/ncform/ncform/compare/v1.3.2...v1.4.0) (2019-08-05)

### Features

* **ncform:** add item change event ([49a9617](https://github.com/ncform/ncform/commit/49a9617)), closes [#86](https://github.com/ncform/ncform/issues/86)
* **ncform-theme-elementui:** add compound.appendSelect.placeholder and compound.prependSelect.placeholder for input widget ([0ab6584](https://github.com/ncform/ncform/commit/0ab6584)), closes [#85](https://github.com/ncform/ncform/issues/85)
* Add showOneIfEmpty option for array / array-table / array-tabs widgets ([5255597](https://github.com/ncform/ncform/commit/5255597)), closes [#87](https://github.com/ncform/ncform/issues/87)

<a name="1.3.4"></a>
## [1.3.4](https://github.com/ncform/ncform/compare/v1.3.3...v1.3.4) (2019-07-24)

### Features

* **ncform:** add autoDX option to control whether widget configuration supports dx expression automatically or not ([62d23ee](https://github.com/ncform/ncform/commit/62d23ee))

<a name="1.3.3"></a>
## [1.3.3](https://github.com/ncform/ncform/compare/v1.3.2...v1.3.3) (2019-07-03)

### Bug Fixes

* **ncform-theme-elementui:** fixed: Invalid handler for event "change": got undefined ([373848f](https://github.com/ncform/ncform/commit/373848f))

<a name="1.3.2"></a>
## [1.3.2](https://github.com/ncform/ncform/compare/v1.3.1...v1.3.2) (2019-06-24)

### Features

* **ncform-theme-elementui:** add valueFormat config for date-picker widget ([7d38dc6](https://github.com/ncform/ncform/commit/7d38dc6)), closes [#68](https://github.com/ncform/ncform/issues/68)

<a name="1.3.1"></a>
## [1.3.1](https://github.com/ncform/ncform/compare/v1.3.0...v1.3.1) (2019-06-13)

### Bug Fixes

* **ncform-theme-elementui:** fixed itemDataKey get undefined value when enumSource be setted by dx express ([631b6c7](https://github.com/ncform/ncform/commit/631b6c7))

<a name="1.3.0"></a>
# [1.3.0](https://github.com/ncform/ncform/compare/v1.2.1...v1.3.0) (2019-06-13)

### Features

* select/radio/checkbox adds itemDataKey config ([1d7fba3](https://github.com/ncform/ncform/commit/1d7fba3))

<a name="1.2.1"></a>
## [1.2.1](https://github.com/ncform/ncform/compare/v1.2.0...v1.2.1) (2019-06-05)

### Bug Fixes

* **ncform-theme-elementui:** add inVLayout config to correct distance to label when in v layout ([fbcfcce](https://github.com/ncform/ncform/commit/fbcfcce)), closes [#69](https://github.com/ncform/ncform/issues/69)
* **ncform-theme-elementui:** auto active tab when adding and deleting ([5ce6e36](https://github.com/ncform/ncform/commit/5ce6e36)), closes [#71](https://github.com/ncform/ncform/issues/71)
* **ncform-theme-elementui:** fixed select enumSource not support dx expression bug ([cc5209b](https://github.com/ncform/ncform/commit/cc5209b))

<a name="1.2.0"></a>
## [1.2.0](https://github.com/ncform/ncform/compare/v1.1.2...v1.2.0) (2019-05-17)

### Bug Fixes

* fixed "TypeError: Cannot read property 'showLegend' of undefined" ([beead19](https://github.com/ncform/ncform/commit/beead19)), closes [#57](https://github.com/ncform/ncform/issues/57)

### Features

* **ncform:** add $ncformAllRules and $ncformAllWidgets apis ([c565992](https://github.com/ncform/ncform/commit/c565992))
* add requiredDelConfirm and delConfirmText configs for array type layouts ([886148b](https://github.com/ncform/ncform/commit/886148b)), closes [#62](https://github.com/ncform/ncform/issues/62)

<a name="1.1.2"></a>
## [1.1.2](https://github.com/ncform/ncform/compare/v1.1.1...v1.1.2) (2019-04-24)

### Bug Fixes

* **ncform-common:** Improve the format verification of the form schema ([395cdfb](https://github.com/ncform/ncform/commit/395cdfb))
* **ncform-theme-elementui:** fixed modelVal becomes '0' when the date-picker value is cleared ([c054a0a](https://github.com/ncform/ncform/commit/c054a0a)), closes [#56](https://github.com/ncform/ncform/issues/56)
* fixed the problem of displaying empty options when entering keyword with no matches and blur ([e175661](https://github.com/ncform/ncform/commit/e175661))

<a name="1.1.1"></a>
## [1.1.1](https://github.com/ncform/ncform/compare/v1.1.0...v1.1.1) (2019-03-30)

### Bug Fixes

* **ncform-theme-elementui:** fixed error when not provide otherParams ([66d1713](https://github.com/ncform/ncform/commit/66d1713))
* **ncform-theme-elementui:** fixed select widget bugs ([ea05422](https://github.com/ncform/ncform/commit/ea05422))

<a name="1.1.0"></a>
## [1.1.0](https://github.com/ncform/ncform/compare/v1.0.0...v1.1.0) (2019-03-30)

### Code Refactoring

* rename $t to $nclang, in order to avoid conflicts with vue-i18n method ([6df509e](https://github.com/ncform/ncform/commit/6df509e)), closes [#51](https://github.com/ncform/ncform/issues/51)

<a name="1.0.0"></a>
## [1.0.0](https://github.com/ncform/ncform/compare/v0.1.28...v1.0.0) (2019-03-19)

### Bug Fixes

* Fixed object layout cann't show label when setting v layout ([ff65ac1](https://github.com/ncform/ncform/commit/ff65ac1))
* **ncform:** fixed image width or height not adaptive when preview ([61bea74](https://github.com/ncform/ncform/commit/61bea74))
* **ncform:** fixed the bug that the valueTemplate initialization value is overwritten by the dynamically calculated value ([7a8ca09](https://github.com/ncform/ncform/commit/7a8ca09))

### Features

* All stardard widgets's widgetConfig support dx expression ([ae829e0](https://github.com/ncform/ncform/commit/ae829e0))
* ui.legend support dx expression ([45af266](https://github.com/ncform/ncform/commit/45af266))
* ui.label support dx expression ([cc0f585](https://github.com/ncform/ncform/commit/cc0f585))
* Fully tested

### BREAKING CHANGES

* All custom widgets's widgetConfig configuration properties automatically support dx expressions
* Widget's mergeConfig is readonly now. don't use it as data for assignment.

<a name="0.1.28"></a>
## [0.1.28](https://github.com/ncform/ncform/compare/v0.1.27...v0.1.28) (2019-03-04)

### Bug Fixes

Fixed init lang parameter default value bugs && array-table required flag display bugs([cc38c47](https://github.com/ncform/ncform/commit/cc38c47))

<a name="0.1.27"></a>
## [0.1.27](https://github.com/ncform/ncform/compare/v0.1.26...v0.1.27) (2019-03-03)

### Bug Fixes

* Add lang option when init ncform && remove `$ncformSetLang` api ([25d4684](https://github.com/ncform/ncform/commit/25d4684))

<a name="0.1.26"></a>
## [0.1.26](https://github.com/ncform/ncform/compare/v0.1.25...v0.1.26) (2019-03-03)

### Features

* Add `$ncformAddWidget` and `$ncformAddRule` apis ([3aba786](https://github.com/ncform/ncform/commit/3aba786))
* Add `$ncformSetLang` api && all standard components support en && zh-cn ([3ba93ff](https://github.com/ncform/ncform/commit/3ba93ff))


<a name="0.1.25"></a>
## [0.1.25](https://github.com/ncform/ncform/compare/v0.1.24...v0.1.25) (2019-02-26)


### Bug Fixes

* Fixed the display bug of the object type control in the h layout ([88aa77b](https://github.com/ncform/ncform/commit/88aa77b))
* Remove garbled chars ([db4e9ca](https://github.com/ncform/ncform/commit/db4e9ca))


### Features

* Add HTML && COMP types to support static content show. ([e4a9bc7](https://github.com/ncform/ncform/commit/e4a9bc7))
* Add array item collapse feature ([7ac74ad](https://github.com/ncform/ncform/commit/7ac74ad))

<a name="0.1.17"></a>
## [0.1.17](https://github.com/ncform/ncform/compare/v0.1.16...v0.1.17) (2018-10-29)


### Features

* **ncform:** add isDirty prop ([82a468b](https://github.com/ncform/ncform/commit/82a468b)), closes [#32](https://github.com/ncform/ncform/issues/32)

<a name="0.1.16"></a>
## [0.1.16](https://github.com/ncform/ncform/compare/v0.1.15...v0.1.16) (2018-10-27)


### Bug Fixes

* **ncform-theme-elementui:** fixed upload control fields assignment error ([23a4acf](https://github.com/ncform/ncform/commit/23a4acf)), closes [#23](https://github.com/ncform/ncform/issues/23)
* **ncform-theme-elementui:** fixed select control when multiple is set to true, then the otherParams changed cause error ([1485660](https://github.com/ncform/ncform/commit/1485660)), closes [#24](https://github.com/ncform/ncform/issues/24)


### Features

* **ncform:** add new rule - ajax ([961f1eb](https://github.com/ncform/ncform/commit/961f1eb)), closes [#29](https://github.com/ncform/ncform/issues/29)
* **ncform:** add reset method - $ncformReset(formName) ([a192afc](https://github.com/ncform/ncform/commit/a192afc)), closes [#25](https://github.com/ncform/ncform/issues/25)
* **ncform:** description support dx expression && html content ([7fc4532](https://github.com/ncform/ncform/commit/7fc4532)), closes [#27](https://github.com/ncform/ncform/issues/27)

<a name="0.1.15"></a>
## [0.1.15](https://github.com/ncform/ncform/compare/v0.1.14...v) (2018-10-11)

### Bug Fixes

* **ncform-theme-elementui:** fixed input control $emit input event when init with compound.prependSelect config ([941a88f](https://github.com/ncform/ncform/commit/941a88f)), closes [#19](https://github.com/ncform/ncform/issues/19)

### Features

* **ncform:** add valueTemplate config, now you can easily control one field's value depend on another ([8ac95eb](https://github.com/ncform/ncform/commit/8ac95eb))

<a name="0.1.13"></a>
## [0.1.13](https://github.com/ncform/ncform/compare/v0.1.12...v0.1.13) (2018-09-10)

### Bug Fixes

* **ncform:** fixed non-required fields still verify rules with empty value ([fe9901c](https://github.com/ncform/ncform/commit/fe9901c)), issue [#16](https://github.com/ncform/ncform/issues/16)

### Features

* **ncform:** add globalConfig.ignoreRulesWhenHidden configure ([4d0b6d0](https://github.com/ncform/ncform/commit/4d0b6d0)), issue [#17](https://github.com/ncform/ncform/issues/17)
* **ncform:** pattern rule value support string type ([cd22f48](https://github.com/ncform/ncform/commit/cd22f48)), issue [#15](https://github.com/ncform/ncform/issues/15)



<a name="0.1.12"></a>
## [0.1.12](https://github.com/ncform/ncform/compare/v0.1.10...v) (2018-08-24)

### Features

* **ncform:** default value support dx expression ([bee57fc](https://github.com/ncform/ncform/commit/bee57fc))

<a name="0.1.10"></a>
## [0.1.10](https://github.com/ncform/ncform/compare/v0.1.8...v0.1.10) (2018-08-07)

### Features

* Build `template compiled` lib to suppoort runtime-only version vue； ([98f46f5](https://github.com/ncform/ncform/commit/98f46f5))

* Upgrade webpack version to 4；([98f46f5](https://github.com/ncform/ncform/commit/98f46f5))

* **ncform-theme-element:** input control add trim configure; ([98f46f5](https://github.com/ncform/ncform/commit/98f46f5))



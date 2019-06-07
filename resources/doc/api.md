# APIDO/M

## /add
追加を行います。

<index>

- HTTPS
- POST
- application/json

</index>


<source>

**PRODUCTION**
```
https://example.com/add
```

**STAGING**
```
https://stg.example.com/add
```

</source>

### リクエスト

|パラメータ名|論理名|必須|型|説明|
|--|--|:--:|--|--|
|name|氏名||String|パラメーターの備考|
|tel|電話番号||String|パラメーターの備考|
|mail|メールアドレス||String|パラメーターの備考|


### レスポンス
|パラメータ名|型|説明|
|--|--|--|
|status|Boolean|パラメーターの備考|
|message|String|パラメーターの備考|

<source>

```json
[
  {
    "status": Boolean,
    "message": String
  }
]
```

</source>

### サンプル

<source>

**REQUEST**
```
https://example.com/add
```

**RESPONSE**
```
[
  {
    "status": "success",
    "message": "成功しました"
  }
]
```

</source>



## /employee
employeeデータを取得します。

<index>

- HTTPS
- GET
- application/json

</index>


<source>

**PRODUCTION**
```
https://example.com/employee
```

**STAGING**
```
https://stg.example.com/employee
```

</source>

### レスポンス
|パラメータ名|型|説明|
|--|--|--|
|id|String|パラメーターの備考|
|employee_name|String|パラメーターの備考|
|employee_age|String|パラメーターの備考|

<source>

**成功**

```json
[
  {
    "id": String,
    "employee_name": String,
    "employee_age": String
  },
  {
    "id": "2",
    "employee_name": String,
    "employee_age": String
  }
  ...
]
```

**失敗**

```json
[
  {
    "message": String
  }
]
```

</source>


### サンプル

<source>

**REQUEST**
```
https://example.com/employee
```

**RESPONSE**
```
[
  {
    "id": "1",
    "employee_name": "employee_name"
    "employee_age": "employee_age"
  },
  {
    "id": "2",
    "employee_name": "employee_name"
    "employee_age": "employee_age"
  }
  ...
]
```

</source>


## /employee/{id}
employeeデータを取得します。

<index>

- HTTPS
- GET
- application/json

</index>


<source>

**PRODUCTION**
```
https://example.com/employee/{id}
```

**STAGING**
```
https://stg.example.com/employee/{id}
```

</source>

### リクエスト

|パラメータ名|論理名|必須|型|説明|
|--|--|:--:|--|--|
|id|ID||String|パラメーターの備考|


### レスポンス
|パラメータ名|型|説明|
|--|--|--|
|id|String|パラメーターの備考|
|employee_name|String|パラメーターの備考|
|employee_age|String|パラメーターの備考|

<source>

**成功**

```json
[
  {
    "id": String,
    "employee_name": String,
    "employee_age": String
  }
]
```

**失敗**

```json
[
  {
    "message": String
  }
]
```

</source>



### サンプル

<source>

**REQUEST**
```
https://example.com/employee/1
```

**RESPONSE**
```
[
  {
    "id": "1",
    "employee_name": "employee_name"
    "employee_age": "employee_age"
  }
]
```

</source>

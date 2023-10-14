<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "user_auth".
 *
 * @property int $id
 * @property int $account_id
 * @property string $token
 * @property string|null $createdAt
 * @property string|null $updateAt
 *
 * @property Account $account
 */
class UserAuth extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'user_auth';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['account_id', 'token'], 'required'],
            [['account_id'], 'integer'],
            [['createdAt', 'updateAt'], 'safe'],
            [['token'], 'string', 'max' => 32],
            [['account_id'], 'exist', 'skipOnError' => true, 'targetClass' => Account::class, 'targetAttribute' => ['account_id' => 'id']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'account_id' => 'Account ID',
            'token' => 'Token',
            'createdAt' => 'Created At',
            'updateAt' => 'Update At',
        ];
    }

    /**
     * Gets query for [[Account]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getAccount()
    {
        return $this->hasOne(Account::class, ['id' => 'account_id']);
    }
}

<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "transaksi".
 *
 * @property int $id
 * @property int $account_id
 * @property int $paket_id
 * @property string $tgl_pemesanan
 * @property string $status
 * @property string $tgl_pembayaran
 *
 * @property Account $account
 * @property Paket $paket
 */
class Transaksi extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'transaksi';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['account_id', 'paket_id', 'tgl_pemesanan', 'status', 'tgl_pembayaran'], 'required'],
            [['account_id', 'paket_id'], 'integer'],
            [['tgl_pemesanan', 'tgl_pembayaran'], 'safe'],
            [['status'], 'string'],
            [['paket_id'], 'exist', 'skipOnError' => true, 'targetClass' => Paket::class, 'targetAttribute' => ['paket_id' => 'id']],
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
            'paket_id' => 'Paket ID',
            'tgl_pemesanan' => 'Tgl Pemesanan',
            'status' => 'Status',
            'tgl_pembayaran' => 'Tgl Pembayaran',
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

    /**
     * Gets query for [[Paket]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getPaket()
    {
        return $this->hasOne(Paket::class, ['id' => 'paket_id']);
    }
}

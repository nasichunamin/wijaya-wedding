<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "account".
 *
 * @property int $id
 * @property string $username
 * @property string $password
 * @property string $role
 * @property string $nama_lengkap
 * @property string $jenis_kelamin
 * @property string $tgl_lahir
 * @property string $no_telepon
 *
 * @property Transaksi[] $transaksis
 */
class Account extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'account';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['username', 'password', 'role', 'nama_lengkap', 'jenis_kelamin', 'tgl_lahir', 'no_telepon'], 'required'],
            [['jenis_kelamin'], 'string'],
            [['tgl_lahir'], 'safe'],
            [['username', 'no_telepon'], 'string', 'max' => 100],
            [['password', 'nama_lengkap'], 'string', 'max' => 255],
            [['role'], 'string', 'max' => 10],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'username' => 'Username',
            'password' => 'Password',
            'role' => 'Role',
            'nama_lengkap' => 'Nama Lengkap',
            'jenis_kelamin' => 'Jenis Kelamin',
            'tgl_lahir' => 'Tgl Lahir',
            'no_telepon' => 'No Telepon',
        ];
    }

    /**
     * Gets query for [[Transaksis]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getTransaksis()
    {
        return $this->hasMany(Transaksi::class, ['account_id' => 'id']);
    }
}

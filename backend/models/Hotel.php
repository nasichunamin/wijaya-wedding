<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "hotel".
 *
 * @property int $id
 * @property string $nama
 * @property string $alamat
 *
 * @property Paket[] $pakets
 */
class Hotel extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'hotel';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['nama', 'alamat'], 'required'],
            [['alamat'], 'string'],
            [['nama'], 'string', 'max' => 100],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'nama' => Yii::t('app', 'Nama'),
            'alamat' => Yii::t('app', 'Alamat'),
        ];
    }

    /**
     * Gets query for [[Pakets]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getPakets()
    {
        return $this->hasMany(Paket::class, ['hotel_id' => 'id']);
    }
}

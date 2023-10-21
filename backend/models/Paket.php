<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "paket".
 *
 * @property int $id
 * @property int|null $hotel_id
 * @property string $kategori
 * @property string $nama
 * @property int $harga
 * @property string $gambar
 * @property string|null $dekorasi
 * @property string|null $makeup_dan_busana
 * @property string|null $upacara_dan_tenda
 * @property string|null $dokumentasi
 * @property string|null $entertainment
 * @property string|null $updateAt
 * @property string|null $deleteAt
 *
 * @property Hotel $hotel
 * @property Transaksi[] $transaksis
 */
class Paket extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'paket';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['hotel_id', 'harga'], 'integer'],
            [['kategori', 'nama', 'harga'], 'required'],
            [['kategori', 'dekorasi', 'makeup_dan_busana', 'upacara_dan_tenda', 'dokumentasi', 'entertainment'], 'string'],
            [['updateAt', 'deleteAt'], 'safe'],
            [['nama', 'gambar'], 'string', 'max' => 255],
            [['hotel_id'], 'exist', 'skipOnError' => true, 'targetClass' => Hotel::class, 'targetAttribute' => ['hotel_id' => 'id']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'hotel_id' => 'Hotel ID',
            'kategori' => 'Kategori',
            'nama' => 'Nama',
            'harga' => 'Harga',
            'gambar' => 'Gambar',
            'dekorasi' => 'Dekorasi',
            'makeup_dan_busana' => 'Makeup Dan Busana',
            'upacara_dan_tenda' => 'Upacara Dan Tenda',
            'dokumentasi' => 'Dokumentasi',
            'entertainment' => 'Entertainment',
            'updateAt' => 'Update At',
            'deleteAt' => 'Delete At',
        ];
    }

    /**
     * Gets query for [[Hotel]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getHotel()
    {
        return $this->hasOne(Hotel::class, ['id' => 'hotel_id']);
    }

    /**
     * Gets query for [[Transaksis]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getTransaksis()
    {
        return $this->hasMany(Transaksi::class, ['paket_id' => 'id']);
    }
}

<?php

namespace app\controllers\api;

/**
* This is the class for REST controller "HotelController".
*/

use app\models\Paket;
use yii\filters\AccessControl;
use yii\helpers\ArrayHelper;

class PaketController extends RestController
{

    public function actionList()
    {
   $pakets = Paket::find()->all();
   $data = [];

   foreach ($pakets as $paket) {
       $data[] = [
           'id' => $paket->id,
           'hotel_id' => $paket->hotel_id,
           'kategori' => $paket->kategori,
           'nama' => $paket->nama,
           'harga' => $paket->harga,
           'gambar' => $paket->gambar,
           'dekorasi' => $paket->dekorasi,
           'makeup_dan_busana' => $paket->makeup_dan_busana,
           'upacara_dan_tenda' => $paket->upacara_dan_tenda,
           'dokumentasi' => $paket->dokumentasi,
           'entertainment' => $paket->entertainment,
           'updateAt' => $paket->updateAt,
           'deleteAt' => $paket->deleteAt,
           'hotel_detail' => [
               'id' => $paket->hotel->id,
               'nama' => $paket->hotel->nama,
               'alamat' => $paket->hotel->alamat,
           ],
       ];
   }
        return $this->output($data);
    }

    public function actionDetail($id){
        $paket = Paket::findOne(['id'=> $id]);
     
            $data = [
                'id' => $paket->id,
                'hotel_id' => $paket->hotel_id,
                'kategori' => $paket->kategori,
                'nama' => $paket->nama,
                'harga' => $paket->harga,
                'gambar' => $paket->gambar,
                'dekorasi' => $paket->dekorasi,
                'makeup_dan_busana' => $paket->makeup_dan_busana,
                'upacara_dan_tenda' => $paket->upacara_dan_tenda,
                'dokumentasi' => $paket->dokumentasi,
                'entertainment' => $paket->entertainment,
                'updateAt' => $paket->updateAt,
                'deleteAt' => $paket->deleteAt,
                'hotel_detail' => [
                    'id' => $paket->hotel->id,
                    'nama' => $paket->hotel->nama,
                    'alamat' => $paket->hotel->alamat,
                ],
            ];
             return $this->output($data);
    }
}

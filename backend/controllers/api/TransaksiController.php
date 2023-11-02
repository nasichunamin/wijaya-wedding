<?php

namespace app\controllers\api;

/**
* This is the class for REST controller "HotelController".
*/

use app\models\Transaksi;
use Yii;
use yii\filters\AccessControl;
use yii\helpers\ArrayHelper;
use yii\web\UploadedFile;

class TransaksiController extends RestController
{

    public function actionList($id)
    {
        $currentUser = $this->getAuthUser();
        if (isset($currentUser['code']) && $currentUser['code'] == 500) {
            return $currentUser;
        }
        $lists = Transaksi::find()->where(['account_id' => $id])->all();
        $data = [];

        foreach ($lists as $list){
            $data[] = [
                'id' => $list->id,
                'account_id' => $list->account_id,
                'paket_id' => $list->paket_id,
                'tgl_pemesanan' => $list->tgl_pemesanan,
                'status' => $list->status,
                'alamat_pemesanan' => $list->alamat_pemesanan,
                'bukti_pembayaran' => $list->bukti_pembayaran,
                'tgl_pembayaran' => $list->tgl_pembayaran,
                'paket_detail' => [
                    'id' => $list->paket->id,
                    'hotel_id' => $list->paket->hotel_id,
                    'kategori' => $list->paket->kategori,
                    'nama' => $list->paket->nama,
                    'harga' => $list->paket->harga,
                    'gambar' => $list->paket->gambar,
                    'dekorasi' => $list->paket->dekorasi,
                    'makeup_dan_busana' => $list->paket->makeup_dan_busana,
                    'upacara_dan_tenda' => $list->paket->upacara_dan_tenda,
                    'dokumentasi' => $list->paket->dokumentasi,
                    'entertainment' => $list->paket->entertainment,
                    'updateAt' => $list->paket->updateAt,
                    'deleteAt' => $list->paket->deleteAt,
                    'hotel_detail' => [
                        'id' => $list->paket->hotel->id,
                        'nama' => $list->paket->hotel->nama,
                        'alamat' => $list->paket->hotel->alamat,
                    ],
                ]
            ];
        }
        return $this->output(['message' => 'sukses','data' => $data]);

            
        
        // return $this->output(Transaksi::find()->all());
    }

    public function actionDetail($id)
    {
        $currentUser = $this->getAuthUser();
        if (isset($currentUser['code']) && $currentUser['code'] == 500) {
            return $currentUser;
        }
        $lists = Transaksi::find()->where(['id' => $id])->all();
        $data = [];

        foreach ($lists as $list){
            $data = [
                'id' => $list->id,
                'account_id' => $list->account_id,
                'paket_id' => $list->paket_id,
                'tgl_pemesanan' => $list->tgl_pemesanan,
                'status' => $list->status,
                'alamat_pemesanan' => $list->alamat_pemesanan,
                'bukti_pembayaran' => $list->bukti_pembayaran,
                'tgl_pembayaran' => $list->tgl_pembayaran,
                'paket_detail' => [
                    'id' => $list->paket->id,
                    'hotel_id' => $list->paket->hotel_id,
                    'kategori' => $list->paket->kategori,
                    'nama' => $list->paket->nama,
                    'harga' => $list->paket->harga,
                    'gambar' => $list->paket->gambar,
                    'dekorasi' => $list->paket->dekorasi,
                    'makeup_dan_busana' => $list->paket->makeup_dan_busana,
                    'upacara_dan_tenda' => $list->paket->upacara_dan_tenda,
                    'dokumentasi' => $list->paket->dokumentasi,
                    'entertainment' => $list->paket->entertainment,
                    'updateAt' => $list->paket->updateAt,
                    'deleteAt' => $list->paket->deleteAt,
                    'hotel_detail' => [
                        'id' => $list->paket->hotel->id,
                        'nama' => $list->paket->hotel->nama,
                        'alamat' => $list->paket->hotel->alamat,
                    ],
                ]
            ];
        }
        return $this->output($data);

            
        
        // return $this->output(Transaksi::find()->all());
    }

    public function actionCreate()
    {
        $model = new Transaksi;
        $body = $this->getRawBody();
        $currentUser = $this->getAuthUser();
        if (isset($currentUser['code']) && $currentUser['code'] == 500) {
            return $currentUser;
        }
        $model->account_id = $body['account_id'];
        $model->paket_id = $body['paket_id'];
        $model->tgl_pemesanan = $body['tgl_pemesanan'];
        $model->status = '1';
        $model->alamat_pemesanan = $body['alamat_pemesanan'];

        $model->save();

        return $this->output(['message' => 'berhasil tambah transaksi','data' => $model], 200);
       
       
    }

    public function actionPembayaran($id){
        $request = Yii::$app->request;
        $transaksi = Transaksi::findOne($id);

        $currentUser = $this->getAuthUser();
        if (isset($currentUser['code']) && $currentUser['code'] == 500) {
            return $currentUser;
        }
         if ($request) {

           
            $url_gambar = UploadedFile::getInstanceByName('bukti_pembayaran');
            

            if ($url_gambar) {
                $saveTo = '../uploads/image/' . $url_gambar->name ;
               


                if ($url_gambar->saveAs($saveTo)) {
                    $transaksi->bukti_pembayaran = $url_gambar->name;
                    $transaksi->status = '3';
                    $transaksi->tgl_pembayaran = date('Y-m-d H:i:s');
                    $transaksi->save();

                    return $this->output($transaksi);

                }
            } 
        }else{
            echo "gagal";
            $transaksi->loadDefaultValues();
        }
    }
}

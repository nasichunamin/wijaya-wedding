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

    public function actionList()
    {
        return $this->output(Transaksi::find()->all());
    }

    public function actionCreate()
    {
        $model = new Transaksi;
        $body = $this->getRawBody();

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

         if ($request) {

           
            $url_gambar = UploadedFile::getInstanceByName('bukti_pembayaran');
            // $transaksi->bukti_pembayaran = $url_gambar->name;
            // return $this->output(['data' => $url_gambar], 200);
            // NodeLogger::sendLog(['gambar' => $model->gambar]);

            if ($url_gambar) {
                $saveTo = '../uploads/image/' . $url_gambar->name ;
                // $saveTo = '../uploads/image/' . $url_gambar . '.jpg';
                // return $this->output($url_gambar->name);


                if ($url_gambar->saveAs($saveTo)) {
                    $transaksi->bukti_pembayaran = $url_gambar->name;
                    $transaksi->status = 'Menunggu Konfirmasi';
                    $transaksi->tgl_pembayaran = date('Y-m-d H:i:s');
                    $transaksi->save();

                    return $this->output($transaksi);




                    // $model->account_id = $body['account_id'];
                    // $model->paket_id = $body['paket_id'];
                    // $model->tgl_pemesanan = $body['tgl_pemesanan'];
                    // $model->status = $body['status'];
                    // $model->alamat_pemesanan = $body['alamat_pemesanan'];
                    
                    // $model->account_id = $body['account_id'];
                    // $model->paket_id = $body['paket_id'];
                    // $model->tgl_pemesanan = $body['tgl_pemesanan'];
                    // $model->status = $body['status'];
                    // $model->alamat_pemesanan = $body['alamat_pemesanan'];
                    // $model->upload_by = Yii::$app->user->identity->username;
                    // $model->tgl_upload = date('Y-m-d H:i:s');
                    

                }
            } 
        }else{
            echo "gagal";
            $transaksi->loadDefaultValues();
        }
    }
}

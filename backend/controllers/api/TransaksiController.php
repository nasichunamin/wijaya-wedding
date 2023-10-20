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
        $request = Yii::$app->request;

        $model->account_id = $body['account_id'];
        $model->paket_id = $body['paket_id'];
        $model->tgl_pemesanan = $body['tgl_pemesanan'];
        $model->status = '1';
        $model->alamat_pemesanan = $body['alamat_pemesanan'];
        // $model->bukti_pembayaran = $url_gambar->name;

        $model->save();

        return $this->output(['message' => 'berhasil tambah transaksi','data' => $model], 200);
        // if ($request) {

           
        //     $url_gambar = UploadedFile::getInstanceByName('bukti_pembayaran');
        //     $model->bukti_pembayaran = $url_gambar->name;

        //     // NodeLogger::sendLog(['gambar' => $model->gambar]);

        //     if ($model->bukti_pembayaran) {
        //         $saveTo = '../uploads/image/' . $url_gambar->name ;
        //         // $saveTo = '../uploads/image/' . $url_gambar . '.jpg';
        //         // return $this->output($url_gambar->name);


        //         if ($url_gambar->saveAs($saveTo)) {
        //             $model->account_id = $request->post('account_id');
        //             $model->paket_id = $request->post('paket_id');
        //             $model->tgl_pemesanan = $request->post('tgl_pemesanan');
        //             $model->status = $request->post('status');
        //             $model->alamat_pemesanan = $request->post('alamat_pemesanan');
        //             $model->bukti_pembayaran = $url_gambar->name;

        //             $model->save();

        //             return $this->output($model);




        //             // $model->account_id = $body['account_id'];
        //             // $model->paket_id = $body['paket_id'];
        //             // $model->tgl_pemesanan = $body['tgl_pemesanan'];
        //             // $model->status = $body['status'];
        //             // $model->alamat_pemesanan = $body['alamat_pemesanan'];
                    
        //             // $model->account_id = $body['account_id'];
        //             // $model->paket_id = $body['paket_id'];
        //             // $model->tgl_pemesanan = $body['tgl_pemesanan'];
        //             // $model->status = $body['status'];
        //             // $model->alamat_pemesanan = $body['alamat_pemesanan'];
        //             // $model->upload_by = Yii::$app->user->identity->username;
        //             // $model->tgl_upload = date('Y-m-d H:i:s');
                    

        //         }else{
        //             $model->account_id = $request->post('account_id');
        //             $model->paket_id = $request->post('paket_id');
        //             $model->tgl_pemesanan = $request->post('tgl_pemesanan');
        //             $model->status = $request->post('status');
        //             $model->alamat_pemesanan = $request->post('alamat_pemesanan');
        //             // $model->upload_by = Yii::$app->user->identity->username;
        //             // $model->tgl_upload = date('Y-m-d H:i:s');
        //             $model->save();


        //             return $this->output($model);
        //         }
        //     } else {
        //         // echo "gagal 1";
        //         // return $this->output($model);
        //         // $model->account_id = $body['account_id'];
        //         // $model->paket_id = $body['paket_id'];
        //         // $model->tgl_pemesanan = $body['tgl_pemesanan'];
        //         // $model->status = $body['status'];
        //         // $model->alamat_pemesanan = $body['alamat_pemesanan'];
        //         $model->account_id = $request->post('account_id');
        //         $model->paket_id = $request->post('paket_id');
        //         $model->tgl_pemesanan = $request->post('tgl_pemesanan');
        //         $model->status = $request->post('status');
        //         $model->alamat_pemesanan = $request->post('alamat_pemesanan');
        //         // $model->upload_by = Yii::$app->user->identity->username;
        //         // $model->tgl_upload = date('Y-m-d H:i:s');
        //         $model->save();


        //         return $this->output($model);
        //     }
        // }else{
        //     echo "gagal";
        //     $model->loadDefaultValues();
        // }

        // $buku = new Buku(); 
       
    }

    public function actionPembayaran($id){
        $request = Yii::$app->request;
        $transaksi = Transaksi::findOne($id);

         if ($request) {

           
            $url_gambar = UploadedFile::getInstanceByName('bukti_pembayaran');
            $transaksi->bukti_pembayaran = $url_gambar->name;
            // return $this->output(['data' => $url_gambar], 200);
            // NodeLogger::sendLog(['gambar' => $model->gambar]);

            if ($transaksi->bukti_pembayaran) {
                $saveTo = '../uploads/image/' . $url_gambar->name ;
                // $saveTo = '../uploads/image/' . $url_gambar . '.jpg';
                // return $this->output($url_gambar->name);


                if ($url_gambar->saveAs($saveTo)) {
                    $transaksi->bukti_pembayaran = $url_gambar->name;

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

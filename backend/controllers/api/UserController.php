<?php

namespace app\controllers\api;

use app\models\Account;
use app\models\User;
use app\models\UserAuth;
use yii\web\NotFoundHttpException;
use Yii;

class UserController extends RestController
{
    public function actionList()
    {
        return $this->output(User::find()->all());
    }

    public function actionLogin()
    {
        $body = $this->getRawBody();

        $findUser = Account::find()->where(["username" => $body['username']])->one();
        if ($findUser) {
            if ($findUser->password != md5($body['password'])) {
                return $this->output(["password yang anda masukkan salah."], 500);
            }
            $user = $this->findModel($findUser->id);
            $user->token = Yii::$app->security->generateRandomString(32);
            if ($user->save()) {
                $user_auth = new UserAuth();
                $user_auth->account_id = $findUser->id;
                $user_auth->token = $user->token;
                $user_auth->save();
                // if($user_auth->save()){
                // return $this->output(['message' => 'berhasil masuk','data' => $user_auth], 200);
                // }else{
                // return $this->output(['message' => 'gagal masuk','data'=> $user], 200);
                    
                // }
                return $this->output(['message' => 'berhasil masuk','data' => $user], 200);
            } else {
                return $this->output([
                    'data' => 'token belum ada', 500
                ]);
            }
        }else{
            return $this->output([
                'data' => 'akun tidak ditemukan', 500
            ]);
        }
    }

    public function actionCreate()
    {
        $body = $this->getRawBody();
        $request = Yii::$app->request;

        $user = new Account();
        $user->username = $body['username'];
        $user->password = md5($body['password']);
        $user->role = $body['role'];
        $user->nama_lengkap = $body['nama_lengkap'];
        $user->jenis_kelamin = $body['jenis_kelamin'];
        $user->tgl_lahir = $body['tgl_lahir'];
        $user->no_telepon = $body['no_telepon'];
        $user->createdAt = date('Y-m-d H:i:s');
        $user->updatedAt = date('Y-m-d H:i:s');
        $user->save();
        return $this->output(['message' => 'berhasil daftar akun','data' => $user], 200);


        // $user = new Account();
        // $user->name = $request->post('name');
        // $user->username = $request->post('username');
        // $user->password = $request->post('password');
        // $user->save();

        // return $this->output($user);
    }

    public function actionUpdate($id)
    {
        $body = $this->getRawBody();
        $currentUser = $this->getAuthUser();
        if (isset($currentUser['code']) && $currentUser['code'] == 500) {
            return $currentUser;
        }
        $model = $this->findModel($id);
        $model->username = isset($body['username']) ?  $body['username'] :$model->username;
        $model->password = isset($body['password']) ?  md5($body['password']) :$model->password;
        $model->role = isset($body['role']) ?  $body['role'] :$model->role;
        $model->nama_lengkap = isset($body['nama_lengkap']) ?  $body['nama_lengkap'] :$model->nama_lengkap;
        $model->jenis_kelamin = isset($body['jenis_kelamin']) ?  $body['jenis_kelamin'] :$model->jenis_kelamin;
        $model->tgl_lahir = isset($body['tgl_lahir']) ?  $body['tgl_lahir'] :$model->tgl_lahir;
        $model->no_telepon = isset($body['no_telepon']) ?  $body['no_telepon'] :$model->no_telepon;
        $model->updatedAt = date('Y-m-d H:i:s');
        if ($model->save()) {
            return $this->output(['message' => 'berhasil update', 'data' => $model]);
        }
        return $this->output([
            "error" => "id not found",
        ], 401);
    }

    public function actionDelete($id)
    {
        $id = $this->findModel($id);
        $user = $this->getAuthUser();
        if ($user) {
            if ($id->delete()) {
                return $this->output(['data' => 'Success Delete Data']);
            }
            return $this->output(['data' =>  'Error Delete Data']);
        }
    }

    public function actionView($id)
    {
        $id = $this->findModel($id);
        $currentUser = $this->getAuthUser();
        if (isset($currentUser['code']) && $currentUser['code'] == 500) {
            return $currentUser;
        }
           
            return $this->output($id);
    }

    protected function findModel($id)
    {
        if (($model = User::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}

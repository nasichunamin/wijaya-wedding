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

    public function actionLogin($username, $password)
    {
        $findUser = Account::find()->where(["username" => $username])->one();
        if ($findUser) {
            if ($findUser->password != md5($password)) {
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
                'data' => 'tes belum ada', 500
            ]);
        }
    }

    public function actionCreate()
    {
        $request = Yii::$app->request;

        $user = new User();
        $user->name = $request->post('name');
        $user->username = $request->post('username');
        $user->password = $request->post('password');
        $user->save();

        return $this->output($user);
    }

    public function actionUpdate($id)
    {
        $body = $this->getRawBody();

        $model = $this->findModel($id);
        $model->name = $body['name'];
        $model->username = $body['username'];
        if ($model->save()) {
            return $this->output(['data' => 'oke']);
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

    protected function findModel($id)
    {
        if (($model = User::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}

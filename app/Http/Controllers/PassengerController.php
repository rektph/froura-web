<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Passenger;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Input;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class PassengerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function passengerRegister(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:users,email',
            'fname' => 'required|alpha',
            'lname' => 'required|alpha'
        ]);

        $names = array('email'=>"Email",
            'fname'=>"First Name", 
            'lname'=>"Last Name");
        
        $validator->setAttributeNames($names);

        if($validator->fails()) return response()->json(["status"=>0,"errors"=>$validator->errors()]);

        $passenger = new Passenger;
        $passenger->name = ucwords(trim($request->input("fname")) . ' ' . trim($request->input("lname")));
        $passenger->email = $request->input("email");
        $passenger->role = 1;
        $passenger->avatar = "default";
        $passenger->mobile = $request->input("mobile");

        try {
            if($passenger->save()) return response()->json(["status"=>1, "role"=>1]);
        } catch (\Exception $e) {
            echo $e->getMessage();
        }
    }
}

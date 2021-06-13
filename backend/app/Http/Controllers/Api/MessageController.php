<?php

namespace App\Http\Controllers\Api;

use App\Events\ChatEvent;
use App\Events\DirectMessageEvent;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Message;


class MessageController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return view('chats');
    }

    public function fetchMessages()
    {
        return Message::with('user')->get();
    }

    public function sendMessage(Request $request)
    {
        
        $message = auth()->user()->messages()->create([
            'message' => $request->message
        ]);

        broadcast(new MessageSent($message->load('user')))->toOthers();

        return ['status' => 'success'];
    }
 
   // public function index(){
    //     return view('chats');
    // }
    
    // public function send(Request $request) {
    //     broadcast(new ChatEvent($request->message))->toOthers();

    //     return response()->json([
    //         'ok'    => true,
    //         'message'   => 'Message sent successfully',
    //     ]);
    // }

    // public function sendDM(Request $request) {
    //     $data = $request->only(['message', 'to']);

    //     event(new DirectMessageEvent($data));

    //     return response()->json([
    //         'ok'    => true,
    //         'message'   => 'Message sent successfully',
    //     ]);
    // }
}
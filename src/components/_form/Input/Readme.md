#### Basic
```
<div style = {{background: '#eee', padding: 10}}>
  <Input label='abc' placeholder='Add your comments'/>
  <Input placeholder='Add more comments'/>
</div>
```

#### Types
```
<div style = {{background: '#eee', padding: 10}}>
  <Input placeholder='Text'     type='text' />
  <Input placeholder='Password' type='password' />
  <Input placeholder='Number'   type='number' />
</div>
```

#### States
```
<div style = {{background: '#eee', padding: 10}}>
  <Input placeholder='Text'     state='success' />
  <Input placeholder='Password' state='warning' info='Warning' />
  <Input placeholder='Number'   state='error' info='Error'/>
</div>
```

#### Disabled
```
<div style={{background: '#eee', padding: 10}}>
  <Input placeholder='Add your comments' disabled />
</div>
```
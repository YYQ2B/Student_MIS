package cn.edu.dlnu.model;

//��Դ�ر���Model
public class Xeon_origin {
	private String originid;	//��Դ�غ�10λ	
	private String origin;		//��Դ����
	public String getOriginid() {
		return originid;
	}
	public void setOriginid(String originid) {
		this.originid = originid;
	}
	public String getOrigin() {
		return origin;
	}
	public void setOrigin(String origin) {
		this.origin = origin;
	}
	public Xeon_origin(String originid, String origin){
		this.originid = originid;
		this.origin = origin;
	}
}
